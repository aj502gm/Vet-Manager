import React from 'react'
function Form() {
    return (
        <div>
            <h1 className = "main-banner">Schedule a new date</h1>
            <form className = "new-date mt-3">
                <div class="mb-3">
                    <h3>Owner</h3>
                    <input type="text" class="form-element global" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <h3>Pet</h3>
                    <input type="text" class="form-element global" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <h3>Schedule the date</h3>
                    <input type="date" id="birthday" name="birthday" className = "form-element global"  id="date" />
                </div>
                <div class="mb-3">
                    <h3>Description</h3>
                    <textarea class="form-element" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>                
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                
            </form>
        </div>
    )
}

export default Form

//https://www.tutsmake.com/how-to-send-data-from-react-to-node-js-express-mysql/

/*
 <form className = "new-date" method = "POST" action = "http://localhost:5600/postDate">
                <h3>Owner</h3>
                <input type ="text" name = "ownerName" className = "form-element global"  id="owner" />
                <h3>Pet</h3>
                <input type = "text" name = "petName" className = "form-element global" id = "pet" />
                <h3>Schedule the date</h3>
                <input type="date" id="birthday" name="birthday" className = "form-element global"  id="date" />
                <h3>Description</h3>
                <textarea className = "form-element description-text" placeholder= "What is wrong with your pet?" name ="problem" ></textarea>
                <div></div>
                <input type="submit" className = "form-element btn" value="Add" />
            </form>

*/ 