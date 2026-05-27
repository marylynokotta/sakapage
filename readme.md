he is a right winger
wears number 7 
said;its not what you see,its what you believe 
patners; new balance,whatsapp,tlc electronics,beats by dre
collaborations;nandos,aime leon dore,fiverr,uniliver

<h1>Bukayo Saka</h1>
    <h2>Arsenal F.C.</h2>
    <h3>Right Winger</h3>

    <h2>Patners</h2>
    <h2>Collaborations</h2>



insta;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Football Player Landing Page</title>

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap" rel="stylesheet">

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      scroll-behavior:smooth;
    }

    body{
      font-family: 'Montserrat', sans-serif;
      background:#0b0f1a;
      color:white;
      overflow-x:hidden;
    }

    /* =========================
       NAVBAR
    ==========================*/
    nav{
      width:100%;
      position:fixed;
      top:0;
      left:0;
      z-index:1000;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:25px 10%;
      backdrop-filter: blur(10px);
      background:rgba(0,0,0,0.25);
    }

    .logo{
      font-size:28px;
      font-weight:900;
      color:#00ff88;
      letter-spacing:2px;
    }

    nav ul{
      display:flex;
      gap:30px;
      list-style:none;
    }

    nav ul li a{
      text-decoration:none;
      color:white;
      font-weight:600;
      transition:0.3s;
    }

    nav ul li a:hover{
      color:#00ff88;
    }

    /* =========================
       HERO SECTION
    ==========================*/
    .hero{
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:120px 10%;
      position:relative;
      overflow:hidden;
    }

    .hero::before{
      content:'';
      position:absolute;
      width:600px;
      height:600px;
      background:#00ff88;
      filter:blur(200px);
      opacity:0.2;
      top:-200px;
      right:-100px;
      border-radius:50%;
    }

    .hero-text{
      max-width:600px;
      z-index:2;
    }

    .hero-text h1{
      font-size:75px;
      line-height:1;
      margin-bottom:20px;
      font-weight:900;
    }

    .hero-text h1 span{
      color:#00ff88;
    }

    .hero-text p{
      color:#ccc;
      line-height:1.8;
      margin-bottom:35px;
      font-size:18px;
    }

    .buttons{
      display:flex;
      gap:20px;
    }

    .btn{
      padding:15px 35px;
      border:none;
      border-radius:50px;
      cursor:pointer;
      font-weight:700;
      transition:0.3s;
      font-size:16px;
    }

    .primary-btn{
      background:#00ff88;
      color:#000;
    }

    .primary-btn:hover{
      transform:translateY(-5px);
      box-shadow:0 10px 30px rgba(0,255,136,0.4);
    }

    .secondary-btn{
      background:transparent;
      border:2px solid #00ff88;
      color:white;
    }

    .secondary-btn:hover{
      background:#00ff88;
      color:black;
    }

    .hero-image{
      position:relative;
      z-index:2;
    }

    .hero-image img{
      width:500px;
      animation:float 4s ease-in-out infinite;
      filter:drop-shadow(0 20px 40px rgba(0,255,136,0.3));
    }

    @keyframes float{
      0%,100%{
        transform:translateY(0px);
      }
      50%{
        transform:translateY(-20px);
      }
    }

    /* =========================
       STATS
    ==========================*/
    .stats{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:30px;
      padding:80px 10%;
      background:#111827;
    }

    .stat-card{
      background:#182233;
      padding:40px;
      border-radius:20px;
      text-align:center;
      transition:0.3s;
      border:1px solid transparent;
    }

    .stat-card:hover{
      transform:translateY(-10px);
      border-color:#00ff88;
    }

    .stat-card h2{
      font-size:50px;
      color:#00ff88;
      margin-bottom:10px;
    }

    .stat-card p{
      color:#ccc;
      font-size:18px;
    }

    /* =========================
       ABOUT
    ==========================*/
    .about{
      padding:120px 10%;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:60px;
      align-items:center;
    }

    .about img{
      width:100%;
      border-radius:25px;
    }

    .about-content h2{
      font-size:50px;
      margin-bottom:20px;
    }

    .about-content span{
      color:#00ff88;
    }

    .about-content p{
      color:#cfcfcf;
      line-height:1.9;
      margin-bottom:20px;
    }

    /* =========================
       GALLERY
    ==========================*/
    .gallery{
      padding:100px 10%;
      background:#111827;
    }

    .gallery-title{
      text-align:center;
      margin-bottom:60px;
    }

    .gallery-title h2{
      font-size:50px;
    }

    .gallery-title span{
      color:#00ff88;
    }

    .gallery-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:25px;
    }

    .gallery-grid img{
      width:100%;
      height:350px;
      object-fit:cover;
      border-radius:20px;
      transition:0.4s;
    }

    .gallery-grid img:hover{
      transform:scale(1.05);
    }

    /* =========================
       FOOTER
    ==========================*/
    footer{
      padding:40px 10%;
      text-align:center;
      background:#0b0f1a;
      color:#999;
      border-top:1px solid rgba(255,255,255,0.1);
    }

    /* =========================
       RESPONSIVE
    ==========================*/
    @media(max-width:1000px){

      .hero{
        flex-direction:column;
        text-align:center;
        padding-top:180px;
      }

      .hero-text h1{
        font-size:55px;
      }

      .hero-image img{
        width:100%;
        max-width:450px;
        margin-top:50px;
      }

      .buttons{
        justify-content:center;
      }

      .about{
        grid-template-columns:1fr;
      }

      nav ul{
        display:none;
      }
    }

    @media(max-width:600px){

      .hero-text h1{
        font-size:42px;
      }

      .about-content h2,
      .gallery-title h2{
        font-size:38px;
      }
    }

  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav>
    <div class="logo">RONALDO</div>

    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#stats">Stats</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#gallery">Gallery</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero">

    <div class="hero-text">
      <h1>
        THE KING OF <span>FOOTBALL</span>
      </h1>

      <p>
        Elite performance. Legendary goals. Relentless passion.
        Experience the journey of one of the greatest football
        players of all time.
      </p>

      <div class="buttons">
        <button class="btn primary-btn">Watch Highlights</button>
        <button class="btn secondary-btn">View Stats</button>
      </div>
    </div>

    <div class="hero-image">
      <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop" alt="Football Player">
    </div>

  </section>

  <!-- STATS -->
  <section class="stats" id="stats">

    <div class="stat-card">
      <h2 class="counter" data-target="850">0</h2>
      <p>Career Goals</p>
    </div>

    <div class="stat-card">
      <h2 class="counter" data-target="35">0</h2>
      <p>Trophies Won</p>
    </div>

    <div class="stat-card">
      <h2 class="counter" data-target="5">0</h2>
      <p>Ballon d'Or</p>
    </div>

    <div class="stat-card">
      <h2 class="counter" data-target="1200">0</h2>
      <p>Matches Played</p>
    </div>

  </section>

  <!-- ABOUT -->
  <section class="about" id="about">

    <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop" alt="Football">

    <div class="about-content">
      <h2>About <span>The Player</span></h2>

      <p>
        Known for explosive speed, incredible finishing,
        and unmatched determination, this football icon
        has inspired millions around the world.
      </p>

      <p>
        From humble beginnings to global superstardom,
        the journey represents discipline, ambition,
        and greatness on every stage.
      </p>

      <button class="btn primary-btn">
        Read More
      </button>
    </div>

  </section>

  <!-- GALLERY -->
  <section class="gallery" id="gallery">

    <div class="gallery-title">
      <h2>Career <span>Moments</span></h2>
    </div>

    <div class="gallery-grid">

      <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop">

      <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop">

      <img src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200&auto=format&fit=crop">

    </div>

  </section>

  <!-- FOOTER -->
  <footer>
    © 2026 Football Legend. All Rights Reserved.
  </footer>

  <script>

    // =========================
    // COUNTER ANIMATION
    // =========================

    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {

      counter.innerText = '0';

      const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 200;

        if(current < target){

          counter.innerText = `${Math.ceil(current + increment)}`;

          setTimeout(updateCounter, 10);

        } else {

          counter.innerText = target;

        }

      };

      updateCounter();

    });

    // =========================
    // BUTTON INTERACTION
    // =========================

    document.querySelector('.primary-btn')
      .addEventListener('click', () => {

        alert('🎥 Highlights Coming Soon!');

      });

  </script>

</body>
</html>