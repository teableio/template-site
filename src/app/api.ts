import qs from "qs";
export interface IAttach {
  id: string;
  width?: number;
  height?: number;
  name: string;
  path: string;
  presignedUrl: string;
}
export interface IRecordsType {
  id: string;
  name?: string;
  description?: string;
  baseId?: string;
  cover?: IAttach[];
  shortCut?: IAttach[];
  recommend?: boolean;
  tags?: string[];
  inSiteAddress?: string;
  doc?: string;
}

export const fieldIdMap = {
  name: "fldjLW98cEIM1HPs725",
  description: "fldYehDZnQa2zOIwYTW",
  baseId: "flduDv4n46lFjjTtg53",
  cover: "fldGvaTfxIt7BANmhAE",
  recommend: "fldt47H4rjXaB2RYADb",
  tags: "fldJT5IwA5AmhRFDjL0",
  shortCut: "fldAyyj9nmgt5WPdyEE",
  inSiteAddress: "fldXLcku2BHJ3paX4lN",
  doc: "fldF6wHXFqhXIYpzr4R",
};

export const transformRecord = (record: {
  id: string;
  fields: Record<string, unknown>;
}) => {
  return {
    id: record.id,
    name: record.fields[fieldIdMap.name],
    description: record.fields[fieldIdMap.description],
    baseId: record.fields[fieldIdMap.baseId],
    cover: record.fields[fieldIdMap.cover],
    recommend: record.fields[fieldIdMap.recommend],
    tags: record.fields[fieldIdMap.tags],
    shortCut: record.fields[fieldIdMap.shortCut],
    inSiteAddress: record.fields[fieldIdMap.inSiteAddress],
    doc: record.fields[fieldIdMap.doc],
  } as IRecordsType;
};

export const getTemplateList = async () => {
  const tableId = process.env.TABLE_ID;
  const viewId = process.env.VIEW_ID;
  const token = process.env.AUTH_TOKEN;

  const url =
    `https://app.teable.io/api/table/${tableId}/record?` +
    qs.stringify({
      viewId,
      fieldKeyType: "id",
      projection: Object.values(fieldIdMap),
    });
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  });

  const result = await response.json();

  // console.log("url", url);
  // console.log("result", result);
  // console.log(
  //   "result",
  //   result.records.map((r: { fields: any }) => r.fields),
  // );

  return (result.records as any[]).map(transformRecord);
};
