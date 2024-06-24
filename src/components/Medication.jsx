import React from 'react';
import './medication.css';
import Header from './Header';


function Medication() {
    return (
        <>
           <Header/>
            <header>
                <div>
                    <h2>MEDICATION  / DOCTOR / HEALTH</h2>
                    <p>
                        Medication or being able to see a doctor is a basic need and essential for every life. For new arrivals
                        in Brussels, this gets so complicated.
                    </p>
                    <p>
                        Medication is a Fundamental Human right and for all those seeking International Protection,
                        present to Public Hospital your Annex 26, this acts as your identity card and the billing information
                        will automatically be sent to Fedasil. For the other NGO Medical Centre, you are advised to carry your annex Form too 
                    </p>
                    <p>Below are a list of Public Hospitals, Free clinics that you can seek Medical Support.</p>
                </div>
            </header>

            <section>
                <div>
                    <p>
                        <strong>Free Clinic Asbl</strong> <br />
                        Address - chau.de Wvre 154/a, 1050 ixelles <br />
                        Open - Monday-Friday from 8:45 a.m - 6:30 p.m <br />
                        Telephone: 02 512 13 14 (Recommended to Call for appointment) <br />
                        
                    </p>
                    <p>
                        <strong>Maison Médicale Galilée</strong> <br />
                        Address - Rue Emile Féron 27, 1060 Saint-Gilles <br />
                        Open -  Monday-Friday from  8:00 a.m - 7p.m <br />
                        Telephone: 02 539 29 58

                        <p>
                            <strong>Maison Médicale Santé Plurielle</strong> <br />
                            Address - Rue de la Victoire 110, 1060 Saint-Gilles <br />
                            Open - Monday-Friday from 8:00 a.m - 7p.m <br />
                            ......  Saturday from 10a.m - 11:30p.m
                        </p>



                        
                    </p>
                </div>
            </section>
        </>
    );
}

export default Medication;
