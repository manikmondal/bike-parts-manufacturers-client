import React from 'react';
import Footer from '../Shared/Footer';


const MyProfile = () => {
    return (
        <div>

            <div class="max-w-5xl m-6">
                <h1 class="font-bold text-4xl text-green-600 uppercase">manik lal mondol</h1>
                <br />
                <div class="avatar">
                    <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/bQyR9Dk/IMG-3868456.jpg" alt='' />
                    </div>
                </div>
                <br />
                <h3 class="text-lg mt-6">email address:- manik.mondal3399@gmail.com</h3>
                <h3 class="text-lg">email address:- manik440@gmail.com</h3>
                <br />
                <h3 class="font-bold text-lg text-orange-500 uppercase">educational background</h3>

                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>EDUCATION</th>
                                <th>School/University</th>
                                <th>GPA</th>
                                <th>YEAR</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Bachelor of Computer Science and Engineering</td>
                                <td>The Royal University of Dhaka</td>
                                <td>GPA-3.26 (Out of- 4.00)</td>
                                <td>2010</td>
                            </tr>

                            <tr class="hover">
                                <th>2</th>
                                <td>DIP. Eng.  (Computer) 4th Year</td>
                                <td>Center for Computer Studies (CCS)</td>
                                <td>GPA -3.17 (Out of-4.00)</td>
                                <td>2005</td>
                            </tr>

                            <tr>
                                <th>3</th>
                                <td>S.S.C (Science)</td>
                                <td>Sugandhia Muslim Secondary School</td>
                                <td>GPA - 3.13 (out of 5.00)</td>
                                <td>2001 (Barisal Board.)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <h3 class="font-bold text-lg text-green-500 uppercase">technologies or skills</h3>
                <p class="text-xl py-2">Computer Skill:- Dos, Microsoft Windows (win 98to win11) Family, Mac.</p>
                <p class="text-xl py-2">Network skill:- Pair to pair, Server base Network, Wireless Network, ISP Configuration</p>
                <p class="text-xl py-2">Hardware:- Motherboard repair, Ups Service, Printer Service,Laptop and Desktop And All Kind of Computer travel suiting.</p>
                <p class="text-2xl py-4">programming:- html,css,JavaScript,react,react-bootstrap,react-Tailwind CSS,node, mongodb (database),heroku, chrome devtool,Firebase Authentication,netlify, TypeScript, Tailwind,daisyUI etc..</p>
                <br />
                <li>https://rock-gym-club.web.app</li>
                <li>https://your-best-computer-product-devlop-by-manik.netlify.app/</li>
                <li>https://the-computer-warehouse.web.app</li>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyProfile;
