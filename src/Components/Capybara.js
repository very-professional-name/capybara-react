import React from "react";
import { useCapybara, useTasks, useUser } from "../hooks";
import { getFirestore, doc, updateDoc } from "firebase/firestore";


function Capybara() {
    const capybara = useCapybara();
    const tasks = useTasks()
    const user = useUser()
    const feedCapybara = async () => {
        try {
            const db = getFirestore();
            const capybaraDocRef = doc(db, 'capybara', 'DC5C6urCZ800qCt8LqEO');

            await updateDoc(capybaraDocRef, {
                capybara_hungry: false,
            });

            console.log('Capybara fed successfully');
        } catch (error) {
            console.error('Error feeding capybara:', error);
        }
    };

    const waterCapybara = async () => {
        try {
            const db = getFirestore();
            const capybaraDocRef = doc(db, 'capybara', 'DC5C6urCZ800qCt8LqEO');

            await updateDoc(capybaraDocRef, {
                capybara_thirsty: false,
            });

            console.log('Capybara fed successfully');
        } catch (error) {
            console.error('Error feeding capybara:', error);
        }
    };




    return (
        <div className="capybara">
            {capybara ? (
                <div className="project">

                    <section> {capybara.capybara_name} tells you that you have {tasks.length} things to do</section>
                    {capybara.capybara_hungry == true || capybara.capybara_thirsty == true ?
                        (
                            <img className="" src="https://i.imgur.com/gtvYvWn.png" alt={"Crappybara"} width="190" height="240" />

                        ) :
                        (
                            <img className="" src="https://i.imgur.com/QCeyFjY.png" alt={"Happybara"} width="190" height="240" />
                        )



                    }
                    {
                        capybara.capybara_hungry == true ? (
                            <div>
                                <p> Seems like {capybara.capybara_name} is hungry, better feed him!</p>
                                <button onClick={() => feedCapybara()}> Feed {capybara.capybara_name} </button>
                            </div>
                            
                        )
                            :
                            (
                                <p>

                                </p>
                            )
                    }

                    {
                        capybara.capybara_thirsty == true ? (
                            <div>
                                <p> Seems like {capybara.capybara_name} is thirsty, better give him some water!</p>
                                <button onClick={() => waterCapybara()}> Give water to {capybara.capybara_name} </button>
                            </div>

                        )
                            :
                            (
                                <p>

                                </p>
                            )
                    }


                    
                   
                </div>
            ) : (
                <p>Loading...</p>
            )}


        </div>
    );
}

export default Capybara;