
import React, { useLayoutEffect } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postReq, getReq } from '../utils/api';

import "../resources/styles/manager_manage_page.css"
import Header from './Header';

function ManagerManagePage() {
    return (
        <div class="min-vh-100 d-flex flex-column">
            <header class="d-flex sticky-top container-fluid" id="header">
                <img src="./resources/images/logo.png" alt="logo" class="logo" />
                <span class="header-text d-none d-sm-block"
                >Reserve Table From Anywhere!</span>
                <div class="welcome-user ms-auto">Welcome, Admin!</div>
                <button class="restaurant-button rounded-3 border-0">My Restaurants</button>
            </header>
            <main class="flex-grow-1">
                <div class="d-flex align-items-center p-3">
                    <div id="manage-rest-name">Ali Daei Dizy</div>
                    <div class="ms-auto" id="manage-rest-address">
                        Address: Vali-e-Asr Square, Boshehr, Iran
                    </div>
                </div>
                <div class="container-fluid vh-100 d-flex flex-column">
                    <div class="row flex-grow-1">
                        <div class="col-4 h-100 d-flex flex-column" id="reservation-list">
                            <div class="d-flex align-items-center p-2">
                                <div id="manage-rest-reservation-list-header">
                                    Reservation List
                                </div>
                                <div class="ms-auto" id="manage-rest-reservation-list-info">
                                    Select a table to see its reservations
                                </div>
                            </div>

                            <div class="table-responsive">
                                <table class="table-responsive table rounded-3 overflow-hidden">
                                    <tbody>
                                        <tr class="manage-reservation-active">
                                            <td class="manage-reservation-date">17:00 JAn 24th</td>
                                            <td class="reserver">By Tom Holland</td>
                                            <td class="manage-table-id">
                                                <a href="#"> Table 2 </a>
                                            </td>
                                        </tr>
                                        <tr class="manage-reservation-active">
                                            <td class="manage-reservation-date">17:00 Mar 24th</td>
                                            <td class="reserver">By Tom Holland</td>
                                            <td class="manage-table-id">
                                                <a href="#"> Table 3 </a>
                                            </td>
                                        </tr>

                                        <tr class="manage-reservation-done">
                                            <td class="manage-reservation-date">17:00 Feb 24th</td>
                                            <td class="reserver">By Tom Holland</td>
                                            <td class="manage-table-id">
                                                <a href="#"> Table 5 </a>
                                            </td>
                                        </tr>
                                        <tr class="manage-reservation-done">
                                            <td class="manage-reservation-date">17:00 Feb 24th</td>
                                            <td class="reserver">By Tom Holland</td>
                                            <td class="manage-table-id">
                                                <a href="#"> Table 8 </a>
                                            </td>
                                        </tr>
                                        <tr class="manage-reservation-done">
                                            <td class="manage-reservation-date">17:00 Feb 24th</td>
                                            <td class="reserver">By Tom Holland</td>
                                            <td class="manage-table-id">
                                                <a href="#"> Table 10 </a>
                                            </td>
                                        </tr>
                                        <tr class="manage-reservation-done">
                                            <td class="manage-reservation-date">17:00 JAn 24th</td>
                                            <td class="reserver">By Tom Holland</td>
                                            <td class="manage-table-id">
                                                <a href="#"> Table 15 </a>
                                            </td>
                                        </tr>
                                        <tr class="manage-reservation-done">
                                            <td class="manage-reservation-date">17:00 JAn 24th</td>
                                            <td class="reserver">By Tom Holland</td>
                                            <td class="manage-table-id">
                                                <a href="#"> Table 1 </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-8 mh-100" id="add-table">
                            <div class="add-table-button-container">
                                <a id="add-column-button">+ Add Table</a>
                            </div>
                            <div class="container p-4">
                                <div
                                    class="row w-75 mx-auto row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 row-cols-xxl-6 g-4"
                                >
                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>1</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>2</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>3</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>5</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>6</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>7</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>8</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>9</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>10</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>11</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>12</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>4</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>13</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>6</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto d-flex flex-column justify-content-center rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>14</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>6</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto justify-content-center d-flex flex-column rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>15</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>8</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div
                                            class="rest-table mx-auto justify-content-center d-flex flex-column rounded-4"
                                        >
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/hashtag.svg"
                                                    alt="hashtag-icon"
                                                />
                                                <div>16</div>
                                            </div>
                                            <div class="icon-num d-flex justify-content-evenly">
                                                <img
                                                    class="table-manage-icon align-self-center"
                                                    src="./resources/images/icons/seat.svg"
                                                    alt="seat-icon"
                                                />
                                                <div>10</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer
                        class="text-center sticky-bottom row flex-shrink-0 p-2 m-0"
                        id="footer"
                    >
                        <p class="m-0">
                            Copyright &copy; 2024 Mizdooni - All rights reserved.
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default ManagerManagePage;