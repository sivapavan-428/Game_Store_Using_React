import React, { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
    const signupform = document.querySelector(".signup");
    if (!signupform) return;

    signupform.addEventListener("submit", async function(e) {
        e.preventDefault();

        const firstName = document.getElementById("fname").Value.trim();
        const lastName = document.getElementById("lname").value.trim();
        const email = document.getElementById("email")
        
    })
}