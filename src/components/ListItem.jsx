import React from "react";

const ListItem = ({num}) => {
    return (
        <>
            <div className="flex flex-row  space-x-7   ">
                <div className="my-2 ">
                    <span className=" text-white px-7 py-2 rounded-3xl bg-brightRed ">
                        {num}
                    </span>
                </div>
                <div className="flex-col space-y-3">
                    <h3 className="mt-2 font-semibold ">
                        Track company-wide progress
                    </h3>
                    <p className="max-w-md text-base text-gray-500 text-left mx-auto md:mx-0 pb-7">
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ListItem;
