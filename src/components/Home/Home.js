import React from "react";

export const Home = () => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col align-self-end">
                    <h1 className="diplay-3">
                        Code Blue 
                    </h1>
                </div>
                <div className="col align-self-start">
                    <div className="text-center">
                        <img className="w-75" src="./assets/img/code_blue.png" />
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};