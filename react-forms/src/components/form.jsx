import {useState} from "react";

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        phoneType: "",
        staff: "",
        bio: "",
        signUp: ""
    });

    const [errors, setErrors] = useState([]);

    const showErrors = () => {
        if (!errors.length) {
            return null
        }
        return (
            <ul>
                {errors.map(err => <li>{err}</li>)}
            </ul>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();
        if (errors.length > 0) {
            setErrors(errors);
        }
    }

    const handleChange = (field) => {
        return (e) => {
            setUser({...user, [field]: e.target.value});
        }
    }

    const validate = () => {
        let errors = [];
        if (user.name.length === 0) {
            errors.push("name can't be blank");
        }
        if (!user.email.includes("@")) {
            errors.push("invalid email")
        }
        if ((user.phone.length < 10)) {
            errors.push("invalid phone number")
        }
        if ((user.phone)) {
            if (user.phoneType === "") {
                errors.push("select phone type")
            }
        } 
        if (user.bio.length > 280) {
            errors.push("Bio too long. Limit 280 characters")
        }

        return errors;

    }

    // function validateEmail(inputText)
    //     {
    //         var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    //         if(inputText.value.match(mailformat))
    //         {
    //             alert("This is not a valid email address");
    //             return false;
    //             }
    //     }

    // function validatePhoneNumber(input_str) {
    //     var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    
    //     return re.test(input_str);
    // }

    return (
        <>
            <h1>Sign Up</h1>
            { showErrors() }
            <form onSubmit={ handleSubmit }>
                <label>Name
                    <input type="text" value={user.name} onChange={handleChange("name")} required/></label>
                <br/>
                <label>Email
                    <input type="text" value={user.email} onChange={handleChange("email")} required/></label>
                <br/>
                <label>Phone
                    <input type="text" value={user.phone} onChange={handleChange("phone")}/></label>
                <br/>
                <label>Phone Type
                    <select name="phoneType" value= {user.phoneType} onChange= {handleChange("phoneType")}>
                        <option value= ""> Select phone type: </option>
                        <option value= "Home"> Home </option>
                        <option value= "Work"> Work </option>
                        <option value= "Mobile"> Mobile </option>
                    </select></label>
                <br/>
                <label> Bio
                    <textarea name="Bio" value= {user.bio} onChange= {handleChange("bio")}>
                    </textarea>
                </label>
                <br/>
                <label> Email Subscription
                    <input type="checkbox" name= "signUp" value="checked"></input>
                    <input type="submit" value="Submit"></input>
                </label>
            </form>
        </>
    )
}

export default Form;