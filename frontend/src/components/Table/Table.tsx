import React from "react";
import "./Table.scss";
import IconDelete from "@Assets/icons/IconDelete";
import IconEdit from "@Assets/icons/IconEdit";
import IconExport from "@Assets/icons/IconExport";
import SkeletonBox from "../SkeletonBox/SkeletonBox";
import IconPlusSquare from "@Assets/icons/IconPlusSquare";

export type TTableActions = {
  actions: {
    disabled?: boolean,
    icon: "ADD" | "DELETE" | "EDIT" | "EXPORT" | React.ReactNode,
    onClick?: () => void,
  }[],
}

export type TTableColumn = {
  align?: "LEFT" | "CENTER" | "RIGHT",
  label?: React.ReactNode,
  dataKey?: string,
  noWrap?: boolean,
  renderer?: (dataRow: any) => React.ReactNode | string,
}

export type TTableRow = {
  columns: TTableColumn[],
  dataRow: Object,
  rowKey: string,
}

export type TTable = {
  columns: TTableColumn[],
  data: Object[],
  className?: string,
  skeleton?: boolean
  headHidden?: boolean
}

const ALIGNS_MAP = {
  "LEFT": "c-table__cell--left",
  "CENTER": "c-table__cell--center",
  "RIGHT": "c-table__cell--right",
}

export function TableActions({actions}: TTableActions) {
  return <>
    {
      actions.map((a, idx) => {
        const classes = ["c-table__action"];

        if (a.disabled) {
          classes.push("c-table__action--disabled");
        }

        return (
          <button
            disabled={a.disabled}
            key={"table-action-" + idx}
            onClick={a.onClick}
            className={classes.join(" ")}
          >
            {
              a.icon === "DELETE"
                ? <IconDelete/>
                : a.icon === "EDIT"
                  ? <IconEdit/>
                  : a.icon === "EXPORT"
                    ? <IconExport/>
                    : a.icon === "ADD"
                      ? <IconPlusSquare/>
                      : a.icon
            }
          </button>
        );
      })
    }
  </>;
}

function TableRow({columns, dataRow, rowKey}: TTableRow) {
  return (
    <tr>
      {
        columns.map((c, idx) => {
          const cellKey = rowKey + "-" + idx;
          const classes = (c.noWrap ? "c-table__cell--nowrap " : "") + " " + ALIGNS_MAP[c.align ?? "LEFT"];

          if (c.renderer) {
            return <td className={classes} key={cellKey}>{c.renderer(dataRow)}</td>;
          } else if (c.dataKey && Object.hasOwn(dataRow, c.dataKey)) {
            // @ts-ignore
            return <td className={classes} key={cellKey}>{dataRow[c.dataKey]}</td>;
          }

          return <td className={classes} key={cellKey}></td>;
        })
      }
    </tr>
  );
}

export default function Table({columns, data, className, skeleton, headHidden }: TTable) {
  return (
    <div className={`c-table__wrapper ${className ? className : ""}`}>
      <table className="c-table">
      {!headHidden && (  
          <thead>
            <tr>
              {columns.map((c, idx) => (
                <th key={"table-th0-" + idx} className={ALIGNS_MAP[c.align ?? "LEFT"]}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((dataRow, idx) => (
            <React.Fragment key={"table-row-" + idx}>
              {skeleton ? (
                <tr>
                  {columns.map((c, idx) => (
                    <td key={`skeleton-cell-${idx}`}>
                      <SkeletonBox />
                    </td>
                  ))}
                </tr>
              ) : (
                <TableRow key={"table-row-" + idx} columns={columns} dataRow={dataRow} rowKey={"table-row-" + idx} />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
