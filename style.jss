body{
    margin:0;
    padding:0;
    background:#f8f1eb;
    font-family:Georgia, serif;
    color:#6b4c4c;
    text-align:center;
}

/* MAIN CONTAINER */
.container{
    padding:40px 20px;
}

/* CURVY IMAGE STYLE */
.main-image{
    width:320px;
    height:auto;
    object-fit:cover;

    /* THIS MAKES IT WAVY/CURVY */
    border-radius: 43% 57% 61% 39% / 38% 31% 69% 62%;

    border:6px solid #f3d6d1;

    box-shadow:
    0 10px 25px rgba(0,0,0,0.15);

    margin-top:20px;

    transition:0.4s ease;
}

/* SOFT HOVER EFFECT */
.main-image:hover{
    transform:scale(1.03);
}

/* TITLE */
h1{
    margin-top:30px;
    font-size:42px;
    color:#b56c6c;
    font-weight:normal;
}

/* SMALL MESSAGE */
.small-message{
    max-width:650px;
    margin:auto;
    padding:20px;
    line-height:1.9;
    font-size:21px;
    color:#7a5c5c;
}

/* LONG MESSAGE */
.long-message{
    max-width:750px;
    margin:auto;
    padding:20px;
    line-height:2;
    font-size:20px;
    color:#6d5656;
}

/* AUDIO PLAYER */
.audio{
    margin-top:25px;
    width:280px;
}

/* BUTTON */
.button{
    display:inline-block;
    margin-top:35px;
    padding:14px 30px;

    background:#cf8e8e;
    color:white;

    text-decoration:none;
    border-radius:40px;

    transition:0.3s;
    font-size:18px;
}

.button:hover{
    background:#b56c6c;
    transform:translateY(-2px);
}

/* FLOWER-LIKE SOFT BACKGROUND */
body::before{
    content:"";
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;

    background:
    radial-gradient(circle at top left, #f7dede 0%, transparent 30%),
    radial-gradient(circle at bottom right, #f5d8d8 0%, transparent 30%);

    z-index:-1;
}
