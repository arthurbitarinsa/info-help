import React from 'react';
import Home from './Home';
import Header from './Header';

function Food() {
  return (
    <>
   <Header/>

   <header>
    <div>
      <h2>FOOD / FEEDING </h2>
      <p> Imagine the unimaginable adverse effects of Lack of Food !!, As a new comer this can be an issue for, the first days <br />
      or even months </p>

      <p>Below you find a List of Locations you can go and get a free Hot meal.</p>
       </div>
   </header>

   <section>
    <div>
      <p> 
        <strong>Humaritarian Hub</strong> <br />
        Address:  Av. du Port 94/100, 1000, Bruxelles  <br />
        Open : Monday-Sunday, except Wednesday  <br />
        Time :  9:30 a.m - 5:30 pm <br />
        2 Hot meals, one in the Morning, the other in the evening, however its open all day, unlimited flow of Tea, coffee <br />
        water, and so many other activities during the day. 
        </p>
    </div>

    <div>
      <p>
        <strong>Resto du coeur de St Gilles</strong> <br />
        Address : Rue de Bosnie 22, 1060 Saint-Gilles <br />
        Contact : 02 538 92 76 <br />
        Open : Monday-Friday from 8:30 am - 12:45 pm
      </p>

      <div>
        <p>
          <strong>Resto du coeur - L'autre Table</strong> <br />
          Address : Rue Stéphanie 24, 1020 Bruxelles <br />
          Contact : 02 428 38 89 <br />

        </p>
      </div>

      <div>
        <p>
          <strong> Nativitas</strong> <br />
          Address : Rue Haute 116/118, 1000  Bruxelles <br />
          Open : Monday-Friday from 9:30 am - 5:00 pm <br />
          Contact : 02 512 02 35 <br />
        </p>
      </div>


    </div>
   </section>

    </>
  )
}

export default Food