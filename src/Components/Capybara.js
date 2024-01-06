import React, { useEffect, useState } from "react";
import { useCapybara, useTasks, useUser } from "../hooks";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

function Capybara() {
  const capybara = useCapybara();
  const tasks = useTasks();
  const [loading, setLoading] = useState(true);

  const user = useUser("1", getFirestore());

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    }
  }, [user]);

  const capybaraDocId = 'DC5C6urCZ800qCt8LqEO';

  const feedCapybara = async () => {
    try {
      if (user?.money < 1) {
        alert('Get some more coins by doing tasks');
        return;
      }

      const db = getFirestore();
      const capybaraDocRef = doc(db, 'capybara', capybaraDocId);

      // Update capybara state
      await updateDoc(capybaraDocRef, {
        capybara_hungry: false,
      });

      // Update user state
      const userDocRef = doc(db, 'users', user.id);
      await updateDoc(userDocRef, {
        money: user.money - 1,
      });

      console.log('Capybara fed successfully');
    } catch (error) {
      console.error('Error feeding capybara:', error);
    }
  };

  const waterCapybara = async () => {
    try {
      if (user?.money < 1) {
        alert('Get some more coins by doing tasks');
        return;
      }

      const db = getFirestore();
      const capybaraDocRef = doc(db, 'capybara', capybaraDocId);

      // Update capybara state
      await updateDoc(capybaraDocRef, {
        capybara_thirsty: false,
      });

      // Update user state
      const userDocRef = doc(db, 'users', user.id);
      await updateDoc(userDocRef, {
        money: user.money - 1,
      });

      console.log('Capybara watered successfully');
    } catch (error) {
      console.error('Error watering capybara:', error);
    }
  };

  return (
    <div className="capybara">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="project">
          <section>
            {capybara.capybara_name} tells you that you have {tasks.length} things to do
          </section>
          {capybara.capybara_hungry || capybara.capybara_thirsty ? (
            <img className="" src="https://i.imgur.com/gtvYvWn.png" alt={"Crappybara"} width="190" height="240" />
          ) : (
            <img className="" src="https://i.imgur.com/QCeyFjY.png" alt={"Happybara"} width="190" height="240" />
          )}
          {capybara.capybara_hungry && (
            <div>
              <p> Seems like {capybara.capybara_name} is hungry, better feed him!</p>
              <button className="" onClick={feedCapybara}> Feed {capybara.capybara_name} </button>
            </div>
          )}
          {capybara.capybara_thirsty && (
            <div>
              <p> Seems like {capybara.capybara_name} is thirsty, better give him some water!</p>
              <button onClick={waterCapybara}> Give water to {capybara.capybara_name} </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Capybara;