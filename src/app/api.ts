import qs from "qs";

// Defines the structure for attachments in records.
export interface IAttach {
  id: string;
  width?: number;
  height?: number;
  name: string;
  path: string;
  presignedUrl: string;
}

// Defines the structure for records.
export interface IRecordsType {
  id: string;
  name?: string;
  description?: string;
  baseId?: string;
  cover?: IAttach[];
  shortCut?: IAttach[];
  recommend?: boolean;
  tags?: string[];
  doc?: string;
}

/**
 * A mapping of field names to their respective ID in Teable.
 * This ensures robustness in the application as it allows access to record data
 * via field IDs rather than names, which can change in the Teable UI without affecting the application.
 * **if you want to use it, you might to change the fieldIdMap to your own fieldIdMap**
 * Click on the gear ⚙️ in the top right corner of the table and you will see the id of all the fields
 */
export const fieldIdMap = {
  name: "fldjLW98cEIM1HPs725",
  description: "fldYehDZnQa2zOIwYTW",
  baseId: "flduDv4n46lFjjTtg53",
  cover: "fldGvaTfxIt7BANmhAE",
  recommend: "fldt47H4rjXaB2RYADb",
  tags: "fldJT5IwA5AmhRFDjL0",
  shortCut: "fldAyyj9nmgt5WPdyEE",
  doc: "fldF6wHXFqhXIYpzr4R",
};

// Transforms a raw record into a structured object based on the defined interfaces.
export const transformRecord = (record: {
  id: string;
  fields: Record<string, unknown>;
}) => {
  return {
    id: record.id,
    // Access fields using the mapped field IDs for resilience against changes in field names.
    name: record.fields[fieldIdMap.name],
    description: record.fields[fieldIdMap.description],
    baseId: record.fields[fieldIdMap.baseId],
    cover: record.fields[fieldIdMap.cover],
    recommend: record.fields[fieldIdMap.recommend],
    tags: record.fields[fieldIdMap.tags],
    shortCut: record.fields[fieldIdMap.shortCut],
    doc: record.fields[fieldIdMap.doc],
  } as IRecordsType;
};

// Fetches the list of templates from Teable, utilizing environment variables for configuration.
export const getTemplateList = async () => {
  const tableId = process.env.TABLE_ID;
  const viewId = process.env.VIEW_ID;
  const token = process.env.AUTH_TOKEN;

  // Constructs the request URL with query parameters for the Teable API.
  const url =
    `https://app.teable.io/api/table/${tableId}/record?` +
    qs.stringify({
      viewId,
      fieldKeyType: "id", // Specifies that field IDs are used in the query.
      projection: Object.values(fieldIdMap), // Projects only the fields defined in fieldIdMap.
    });
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  });

  const result = await response.json();

  // Transforms the fetched records into structured data.
  return (result.records as any[]).map(transformRecord);
};
