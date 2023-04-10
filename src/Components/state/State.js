import React from "react"
import Star from "./Star"
export default function State() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true,
        address: "Hino"
    })
    /**49
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */
    
    // let starIcon = contact.isFavorite ? "star-filled.jpg" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                // firstName: "John",
                // lastName: "Doe",
                // phone: "+1 (719) 555-1212",
                // email: "itsmyrealname@example.com",
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
        console.log(contact)
    }
    //{isShown && <p>{props.punchline}</p>}
    return (
        <main>
            <article className="card">
                <img src="https://i.imgflip.com/1bij.jpg" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    {/* <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    /> */}
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}
