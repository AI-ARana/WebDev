function saveRedirect()
{
    const name = document.getElementById("name").value;
    const emp_code = document.getElementById("emp_code").value;
    const designation = document.getElementById("designation").value;
    const otherDesignation = document.getElementById("otherDesignation").value;
    const email = document.getElementById("email").value;
    const mobile= document.getElementById("mobile").value;

    const mobileNumberPattern = /^[0-9]{10}$/;
    if (!mobileNumberPattern.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        event.preventDefault();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validation
  /*  if (!validateName(name))
    {
        alert('Please enter a valid name (letters and spaces only).');
        return;
    } */

    const empData={
        name:name,
        emp_code:emp_code,
        designation:designation,
        otherDesignation:otherDesignation,
        email:email,
        mobile:mobile
    };
    localStorage.setItem('empData', JSON.stringify(empData));
    window.location.href = 'myResult.html';


    let designation_final=designation;
    if (designation==="other")
    {
        if (otherDesignation.trim()==="")
        {
            alert("Please enter a valid Designation");
            return;
        }
        designation_final=otherDesignation;
    }

}

function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    return nameRegex.test(name) && name.trim() !== "";
}


document.getElementById('designation').addEventListener('change',function () {
    const otherDesignation = document.getElementById("otherDesignationDiv");
    if (this.value==="other")
    {
        otherDesignationDiv.style.display="block";
    }
    else{
        otherDesignationDiv.style.display="none";
    }

});