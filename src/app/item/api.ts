export interface IAttach {
  id: string;
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
  recommend?: boolean;
  tags?: string[];
  shortCut?: IAttach[];
  inSiteAddress?: string;
}

export const getTemplateList = async () => {
  //app.teable.cn/api/table/{tableId}/record
  const tableId = process.env.TABLE_ID || "tblfNlRsnf7cn0MWtPG";
  const viewId = process.env.VIEW_ID || "viwIDks4rRj4JcxEf0w";
  const token = process.env.AUTH_TOKEN || "access_token"; // Replace with your actual bearer token
  // 'https://app.teable.io/api/table/tblfNlRsnf7cn0MWtPG/record?fieldKeyType=name&viewId=viwBAWOZeD6ugPEwbQS'
  // add viewId and tableId in to query params
  const response = await fetch(
    `https://app.teable.io/api/table/${tableId}/record?viewId=${viewId}&fieldKeyType=id`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    },
  );

  const result = await response.json();

  return result.records.map(
    (record: { id: string; fields: Record<string, unknown> }) => {
      return {
        id: record.id,
        name: record.fields["fldXsIUBJWgg1aLhslv"],
        description: record.fields["fldUR5vWs1WebFfDS9I"],
        baseId: record.fields["fld4IOv1ajIyW4q6wTi"],
        cover: record.fields["fldLBDUwA8h17MSYywG"],
        recommend: record.fields["fldv7zmoX9cs3i8yUM6"],
        tags: record.fields["fldpWKiTgEHOuFsplCM"],
        shortCut: record.fields["fld57nMs1iodAU9A2sH"],
        inSiteAddress: record.fields["fldD6wqkvTgt9NT1ZNa"],
      };
    },
  ) as IRecordsType[];
};
