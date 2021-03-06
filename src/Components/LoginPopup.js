import React, { Component } from 'react'
import './index.css'

class LoginPopup extends Component {
    render() {
        return (
            <
        div className = "login-popup"
        id = "login_popup" >
        <
        span className = "close"
        id = "close" >
        <
        i className = "fas fa-window-close" onClick={this.props.closePopup}> Close Me < /i> < /
        span > <
        div className = "login-form-container" >
        <
        form action = "none"
        className = "login-form" >
        <
        div className = "left-side-form-details" >
        <
        i className = "fas fa-user-alt" > < /i><br / > <
        input type = "text"
        className = "username"
        id = "username"
        placeholder = "Email ID or Phone number" / > < br / >
        <
        input type = "password"
        className = "password"
        id = "password"
        placeholder = "Password" / > < br / >
        <
        button className = "login-popup-btn"
        id = "login_popup_btn" > Login < /button> <
        p className = "forgot" > Forgot Password ? < /p> <
        p className = "signup-para" >
        Need account ?
        <
        a href = "#signup"
        className = "btn-signup" > Sign Up < /a> < /
        p > <
        div className = "social-icon-container" >
        <
        button className = "btn-icon" >
        <
        i className = "fab fa-google" > < /i>
        Google <
        /button> <
        button className = "btn-icon" >
        <
        i className = "fab fa-facebook" > < /i>
        Facebook <
        /button>  < /
        div > <
        /div> <
        div className = "user-interface" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "151.15"
        height = "200.784"
        viewBox = "0 0 151.15 327.784" >
        <
        g id = "lady"
        dataname = "Group 107"
        transform = "translate(-1219.313 -483.791)" >
        <
        path id = "Path_2475"
        dataname = "Path 2475"
        d = "M925.61,386.412a10.522,10.522,0,0,0-.641,1.529l-47.783,13.277-8.611-8.427-14.416,11.333,13.794,16.4a8,8,0,0,0,9.353,2.169l51.616-22.785a10.5,10.5,0,1,0-3.313-13.5Z"
        transform = "translate(410.756 190.754)"
        fill = "#ffb8b8" / >
        <
        path id = "Path_2477"
        dataname = "Path 2477"
        d = "M930.192,379.81l18.188,8.183a3.149,3.149,0,0,1,1.58,4.164l-2.153,4.786a1.053,1.053,0,0,1,.527,1.388l-.861,1.915a1.053,1.053,0,0,1-1.388.527l-.861,1.914a1.053,1.053,0,0,1,.527,1.388l-.861,1.914a1.053,1.053,0,0,1-1.388.527l-11.629,25.846a3.149,3.149,0,0,1-4.164,1.58l-18.188-8.183a3.149,3.149,0,0,1-1.58-4.164l18.089-40.205a3.149,3.149,0,0,1,4.164-1.58Z"
        transform = "translate(410.756 190.754)"
        fill = "#3f3d56" / >
        <
        path id = "Path_2478"
        dataname = "Path 2478"
        d = "M912.821,423.212l14.591,6.571a3.034,3.034,0,0,0,4-1.512l6.739-14.989,2.341-5.2,6.1-13.562a3.026,3.026,0,0,0-1.512-3.989l-4.587-2.068-10.014-4.5a3.021,3.021,0,0,0-3.989,1.522l-5.9,13.111-6.718,14.927-2.561,5.7a3.022,3.022,0,0,0,1.511,3.989Z"
        transform = "translate(410.756 190.754)"
        fill = "#f2f2f2" / >
        <
        path id = "Path_2479"
        dataname = "Path 2479"
        d = "M773.577,540.443h12.26l5.833-47.288H773.575Z"
        transform = "translate(519.512 259.247)"
        fill = "#ffb8b8" / >
        <
        path id = "Path_2480"
        dataname = "Path 2480"
        d = "M879.207,604.933h24.145a15.386,15.386,0,0,1,15.387,15.387v.5H879.208Z"
        transform = "translate(410.756 190.754)"
        fill = "#2f2e41" / >
        <
        path id = "Path_2481"
        dataname = "Path 2481"
        d = "M805.577,537.443h12.26l5.833-47.288H805.575Z"
        transform = "translate(519.512 259.247)"
        fill = "#ffb8b8" / >
        <
        path id = "Path_2482"
        dataname = "Path 2482"
        d = "M911.207,601.933h24.145a15.386,15.386,0,0,1,15.387,15.387v.5H911.208Z"
        transform = "translate(410.756 190.754)"
        fill = "#2f2e41" / >
        <
        path id = "Path_2483"
        dataname = "Path 2483"
        d = "M827.341,497.971a39.41,39.41,0,0,0,36.9,26.81l.62.01c6.33.18,13.76-1.86,21.05-4.79,14.4-5.79,28.23-15.06,31.9-17.61l-6.22,59.79-2.52,24.24a4.514,4.514,0,0,0,4.48,4.97h15.53a4.505,4.505,0,0,0,4.36-3.36l25.64-97.65a19.032,19.032,0,0,0-19.71-23.83l-53.26,3.65,3.72-14.88-47.54-3.16-.14.1c-1.14.83-2.25,1.7-3.31,2.61a40.269,40.269,0,0,0-6.99,7.66A38.487,38.487,0,0,0,827.341,497.971Z"
        transform = "translate(410.756 190.754)"
        fill = "#370c50" / >
        <
        path id = "Path_2484"
        dataname = "Path 2484"
        d = "M827.341,497.971a39.41,39.41,0,0,0,36.9,26.81,196.16,196.16,0,0,0,22.57-13.39l-.9,8.61-7.84,75.42a4.514,4.514,0,0,0,4.48,4.97h15.53a4.505,4.505,0,0,0,4.36-3.36l9.15-34.85,16.49-62.8a19.032,19.032,0,0,0-19.71-23.83l-53.26,3.65,3.72-14.88-26.98-1.79A38.487,38.487,0,0,0,827.341,497.971Z"
        transform = "translate(410.756 190.754)"
        fill = "#370c50" / >
        <
        path id = "Path_2485"
        dataname = "Path 2485"
        d = "M838.773,458.321l-.358-.043-8.3-40.785c-.071-.354-6.852-35.533,13.937-53.924l.362-2.517a4.5,4.5,0,0,1,5.787-3.658l19.585,6.075a4.491,4.491,0,0,1,3.019,5.442l-1.9,7.242c2.64,3.1,33.715,40.512,22.89,69.335l-4.847,18.952Z"
        transform = "translate(410.756 190.754)"
        fill = "#fff" / >
        <
        path id = "Path_2486"
        dataname = "Path 2486"
        d = "M920.094,426.49a10.529,10.529,0,0,0-1.329.99l-47.9-12.858-3.131-11.634-18.175,2.431,3.542,21.134a8,8,0,0,0,6.951,6.622l56.032,6.619a10.5,10.5,0,1,0,4.008-13.305Z"
        transform = "translate(410.756 190.754)"
        fill = "#ffb8b8" / >
        <
        path id = "Path_2487"
        dataname = "Path 2487"
        d = "M869.022,414.436l-22.541,2.9a4.5,4.5,0,0,1-5.074-4.548l.43-22.655a12.5,12.5,0,1,1,24.8-3.121l6.142,21.734a4.5,4.5,0,0,1-3.756,5.686Z"
        transform = "translate(410.756 190.754)"
        fill = "#df0b0b" / >
        <
        circle id = "Ellipse_171"
        dataname = "Ellipse 171"
        cx = "24.561"
        cy = "24.561"
        r = "24.561"
        transform = "translate(1248.871 493.49)"
        fill = "#ffb8b8" / >
        <
        path id = "Path_2488"
        dataname = "Path 2488"
        d = "M861.385,329.348l-3.075-5.6c-5.825,23.732,4.464,43.373,4.464,43.373l-39.932-18.6.38-6.6L819.27,346.4l-5.677-3.129-.75-4.281-4.286,1.062L824.2,311.669c15.182-27.013,37.255-16.7,37.255-16.7,35.115-1.669,30.827,32.975,30.827,32.975Z"
        transform = "translate(410.756 190.754)"
        fill = "#370c50" / >
        <
        /g> < /
        svg > <
        /div> < /
        form > <
        /div> < /
        div >
        )
    }
}
export default LoginPopup
