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


<!-- TIMELINE -->
<section class="timeline" id="timeline">

  <div class="timeline-title">
    <h2>The <span>Journey</span></h2>
  </div>

  <div class="timeline-scroll">

    <div class="timeline-card">
      <span class="timeline-year">2010</span>
      <div class="timeline-dot"></div>
      <h3>Hale End Academy</h3>
      <p>Joined Arsenal's Hale End Academy at just 8 years old, beginning his journey with the club he would one day captain.</p>
    </div>

    <div class="timeline-card">
      <span class="timeline-year">2018</span>
      <div class="timeline-dot"></div>
      <h3>Senior Debut</h3>
      <p>Made his Arsenal senior debut at 17, becoming one of the youngest players to represent the club in a competitive match.</p>
    </div>

    <div class="timeline-card">
      <span class="timeline-year">2020</span>
      <div class="timeline-dot"></div>
      <h3>England Call-Up</h3>
      <p>Earned his first senior England cap in October 2020, cementing his status as one of the brightest talents in the country.</p>
    </div>

    <div class="timeline-card">
      <span class="timeline-year">2021</span>
      <div class="timeline-dot"></div>
      <h3>Player of the Year</h3>
      <p>Won Arsenal Player of the Year — the youngest ever to do so. Repeated the achievement in 2021/22.</p>
    </div>

    <div class="timeline-card">
      <span class="timeline-year">2022</span>
      <div class="timeline-dot"></div>
      <h3>World Cup</h3>
      <p>Scored 3 goals at the 2022 World Cup in Qatar. Won England Men's Player of the Year, silencing his doubters.</p>
    </div>

    <div class="timeline-card">
      <span class="timeline-year">2024</span>
      <div class="timeline-dot"></div>
      <h3>Contract Extension</h3>
      <p>Signed a new long-term contract keeping him at Arsenal until 2030, committing his peak years to the club he loves.</p>
    </div>

    <div class="timeline-card">
      <span class="timeline-year">2026</span>
      <div class="timeline-dot"></div>
      <h3>Premier League Champion</h3>
      <p>Helped Arsenal end a 22-year wait for the title. Scored the decisive UCL semi-final goal vs Atlético Madrid.</p>
    </div>

  </div>
</section>

/* TIMELINE */
.timeline {
  padding: 100px 0;
  background: #111827;
  overflow: hidden;
}

.timeline-title {
  text-align: center;
  margin-bottom: 70px;
  padding: 0 10%;
}

.timeline-title h2 {
  font-size: 50px;
}

.timeline-title span {
  color: #00ff88;
}

.timeline-scroll {
  display: flex;
  gap: 0;
  overflow-x: auto;
  padding: 20px 10% 50px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  position: relative;
  cursor: grab;
}

.timeline-scroll:active {
  cursor: grabbing;
}

/* HIDE SCROLLBAR */
.timeline-scroll::-webkit-scrollbar {
  height: 4px;
}

.timeline-scroll::-webkit-scrollbar-track {
  background: #182233;
}

.timeline-scroll::-webkit-scrollbar-thumb {
  background: #00ff88;
  border-radius: 10px;
}

/* HORIZONTAL LINE */
.timeline-scroll::before {
  content: '';
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, #00ff88, transparent);
}

.timeline-card {
  min-width: 260px;
  max-width: 260px;
  background: #182233;
  border: 1px solid rgba(0, 255, 136, 0.15);
  border-radius: 16px;
  padding: 25px;
  margin-right: 25px;
  scroll-snap-align: start;
  transition: .3s;
  flex-shrink: 0;
  position: relative;
  margin-top: 40px;
}

.timeline-card:hover {
  border-color: #00ff88;
  transform: translateY(-5px);
}

.timeline-year {
  font-size: 13px;
  color: #00ff88;
  font-weight: 700;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 20px;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  background: #00ff88;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
  position: absolute;
  top: -28px;
  left: 25px;
}

.timeline-card h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
}


Updated timeline CSS — replace the old one:
css
Replace the old timeline JS with this:
javascript
The scrollbar is now completely hidden and the only way to navigate is the arrows on either side. Each click moves exactly one card across. How does that look?