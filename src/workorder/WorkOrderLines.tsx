import React from "react";
import {
  AccessTimeOutlined,
  DeleteOutline,
  DragHandleOutlined,
  EditOutlined,
  ThumbUpOutlined
} from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

interface WorkOrderLinesProps {
  listMode?: boolean;
}

const WorkOrderLines: React.FC<WorkOrderLinesProps> = ({
  listMode = false
}) => {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            {!listMode && <TableCell />}
            <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
              Status
            </TableCell>
            <TableCell sx={{ whiteSpace: "nowrap" }}>Code</TableCell>
            <TableCell sx={{ whiteSpace: "nowrap" }}>Description</TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
              Invoice
            </TableCell>
            <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
              Quantity
            </TableCell>
            <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
              Unit price
            </TableCell>
            <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
              Discount
            </TableCell>
            <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
              Type
            </TableCell>
            {!listMode && (
              <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                Order status
              </TableCell>
            )}
            <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
              Total
            </TableCell>
            {!listMode && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {!listMode && (
              <TableCell align="center" sx={{ borderBottom: "none" }}>
                <DragHandleOutlined />
              </TableCell>
            )}
            <TableCell align="center" sx={{ borderBottom: "none" }}>
              <ThumbUpOutlined color="primary" />
            </TableCell>
            <TableCell sx={{ borderBottom: "none" }}>S000131N</TableCell>
            <TableCell sx={{ borderBottom: "none", minWidth: 180 }}>
              30.000 km/12 months
            </TableCell>
            <TableCell align="center" sx={{ borderBottom: "none" }}>
              S
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              1.10
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              €65.00
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}></TableCell>
            <TableCell align="center" sx={{ borderBottom: "none" }}>
              <AccessTimeOutlined />
            </TableCell>
            {!listMode && <TableCell sx={{ borderBottom: "none" }}></TableCell>}
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              €71.50
            </TableCell>
            {!listMode && (
              <TableCell
                align="right"
                sx={{ borderBottom: "none", whiteSpace: "nowrap" }}
              >
                <IconButton color="primary" sx={{ mr: 1 }}>
                  <EditOutlined fontSize="small" />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteOutline fontSize="small" />
                </IconButton>
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            {!listMode && (
              <TableCell align="center" sx={{ borderBottom: "none" }}>
                <DragHandleOutlined />
              </TableCell>
            )}
            <TableCell align="center" sx={{ borderBottom: "none" }}></TableCell>
            <TableCell sx={{ borderBottom: "none" }}></TableCell>
            <TableCell sx={{ borderBottom: "none" }}>Engine oil</TableCell>
            <TableCell align="center" sx={{ borderBottom: "none" }}>
              S
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              4.50
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              €0.00
            </TableCell>
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              10%
            </TableCell>
            <TableCell align="center" sx={{ borderBottom: "none" }}>
              <AccessTimeOutlined />
            </TableCell>
            {!listMode && <TableCell sx={{ borderBottom: "none" }}></TableCell>}
            <TableCell align="right" sx={{ borderBottom: "none" }}>
              €0.00
            </TableCell>
            {!listMode && (
              <TableCell
                align="right"
                sx={{ borderBottom: "none", whiteSpace: "nowrap" }}
              >
                <IconButton color="primary" sx={{ mr: 1 }}>
                  <EditOutlined fontSize="small" />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteOutline fontSize="small" />
                </IconButton>
              </TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkOrderLines;
