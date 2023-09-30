"use client";
import React, { useState } from "react";
import DeleteFacilityModal from "./DeleteFacilityModal";

type FacilityTableCardProps = {
  id: number;
  facilityName: string;
};

const FacilityTableCard = ({ id, facilityName }: FacilityTableCardProps) => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{facilityName}</td>
        <td>
          <button className="py-1 px-5 border bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            View
          </button>
          <button
            onClick={() => setDeleteModal(true)}
            className="py-1 px-4 ms-2 border bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Delete
          </button>
        </td>
      </tr>

      <DeleteFacilityModal
        id={id}
        facilityName={facilityName}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      />
    </>
  );
};

export default FacilityTableCard;
