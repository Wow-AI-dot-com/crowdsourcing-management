import { TColumns, TField, TFields } from "../Form";

export const getField = (result: Record<string, any>, field: TField[] | undefined) => {
  if (Array.isArray(field)) {
    for (let j of field) {
      const fieldName = j && j.name as string;

      switch (j && j.type) {
        case 'text':
        case 'password':
        case 'select':
          result[fieldName] = j?.required ? { name: '', rq: j?.required } : j.options?.[0]?.value || '';
          break;
        case 'toggle':
          result[fieldName] = j?.value || false;
          break;
        case 'counter':
          result[fieldName] = j?.value?.toString();
          break;
        default:
          result[fieldName] = '';
      }
    }
  }
};

export const getColumns = (result: Record<string, any>, columns: TColumns[] | undefined) => {
  if (Array.isArray(columns)) {
    for (let i of columns) {
      getField(result, i?.fields);
    }
  }
};

export const getDataStorage = (data: TFields[]): { [key: string]: Record<string, any> } => {
  const result: { [key: string]: Record<string, any> } = {};
  for (let i of data) {
    const { fields, columns } = i;
    if (fields) {
      getField(result, fields);
    } else {
      getColumns(result ?? {}, columns);
    }
  }
  return result;
};

export function extractValue(data: any): any {
  if (data && typeof data === 'object') {
    if ('name' in data) {
      return data.name;
    } else {
      for (const key in data) {
        const value = extractValue(data[key]);
        if (value !== undefined) {
          return { ...data, [key]: value };
        }
      }
    }
  }
  return undefined;
}
