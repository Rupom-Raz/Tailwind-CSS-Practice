import React from "react";

const Cart = ({image}) => {
    return (
        <>
            <div className="flex flex-col md:w-1/3 px-5 ">
                <img className="w-16 mt-14 mx-auto" src={image} alt="" />
                <h3 className="font-semibold text-center text-veryDarkBlue  py-4">
                    Anisha Li
                </h3>
                <p class="text-sm text-darkGrayishBlue">
                    “Manage has supercharged our team’s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”
                </p>
            </div>
        </>
    );
};

export default Cart;
