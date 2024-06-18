import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface Measurement {
  id: string;
  serial: string;
  ac_volt: string;
  dc_volt: string;
  dc_curr: string;
  curr_limit: string;
  temp: string;
  pfc_ver: string;
  llc_ver: string;
  status_code: string;
}

interface MeasurementTableProps {
  measurements: Measurement[];
}

const ITEMS_PER_PAGE = 20;

const MeasurementTable: React.FC<MeasurementTableProps> = ({ measurements }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentMeasurements = measurements.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(measurements.length / ITEMS_PER_PAGE);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Serial</th>
            <th>AC </th>
            <th>DC </th>
            <th>Val</th>
            <th>Lần đo</th>
            <th>Status Code</th>
          </tr>
        </thead>
        <tbody>
          {currentMeasurements.map((measurement, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{measurement.serial}</td>
              <td>{measurement.ac_volt}</td>
              <td>{measurement.dc_volt}</td>
              <td>{measurement.temp}</td>
              <td>{index+1}</td>
              <td>{measurement.status_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default MeasurementTable;
