
import { useEffect } from 'react'

import portfolioData from './portfoliodata.js'

// Extract unique categories from projects
const getUniqueCategories = () => {
  const categories = portfolioData.projects.map(project => project.category)
  return ['all', ...new Set(categories)]
}

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const elementToggleFunc = (elem) => elem.classList.toggle('active')

      // Sidebar toggle
      const sidebar = document.querySelector('[data-sidebar]')
      const sidebarBtn = document.querySelector('[data-sidebar-btn]')
      if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar))
      }

      // Filter functionality
      const select = document.querySelector('[data-select]')
      const selectItems = document.querySelectorAll('[data-select-item]')
      const selectValue = document.querySelector('[data-select-value]')
      const filterBtn = document.querySelectorAll('[data-filter-btn]')
      
      if (select) {
        select.addEventListener('click', function () { 
          elementToggleFunc(this) 
        })
      }
      
      const filterItems = document.querySelectorAll('[data-filter-item]')
      const filterFunc = (selectedValue) => {
        filterItems.forEach((fi) => {
          const itemCategory = fi.dataset.category.toLowerCase();

          if (selectedValue === "all" || selectedValue === itemCategory) {
            fi.classList.add("active");
          } else {
            fi.classList.remove("active");
          }
        });
      };
      
      selectItems.forEach((si) => {
        si.addEventListener('click', function () {
          const selectedValue = this.innerText.toLowerCase()
          if (selectValue) selectValue.innerText = this.innerText
          if (select) elementToggleFunc(select)
          filterFunc(selectedValue)
        })
      })
      
      let lastClickedBtn = filterBtn[0]
      filterBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
          const selectedValue = this.innerText.toLowerCase()
          if (selectValue) selectValue.innerText = this.innerText
          filterFunc(selectedValue)
          if (lastClickedBtn) lastClickedBtn.classList.remove('active')
          this.classList.add('active')
          lastClickedBtn = this
        })
      })

      // Navigation
      const navigationLinks = document.querySelectorAll('[data-nav-link]')
      const pages = document.querySelectorAll('[data-page]')
      navigationLinks.forEach((link) => {
        link.addEventListener('click', function () {
          pages.forEach((page, j) => {
            if (this.innerHTML.toLowerCase() === page.dataset.page) {
              page.classList.add('active')
              navigationLinks[j].classList.add('active')
              window.scrollTo(0, 0)
            } else {
              page.classList.remove('active')
              navigationLinks[j].classList.remove('active')
            }
          })
        })
      })

      // Portfolio Modal
      const projectAnchors = document.querySelectorAll('.project-list .project-item > a')
      const portfolioModalContainer = document.querySelector('[data-portfolio-modal-container]')
      const portfolioOverlay = document.querySelector('[data-portfolio-overlay]')
      const portfolioModalCloseBtn = document.querySelector('[data-portfolio-modal-close-btn]')
      const pmImg = document.querySelector('[data-project-modal-img]')
      const pmTitle = document.querySelector('[data-project-modal-title]')
      const pmTech = document.querySelector('[data-project-modal-tech]')
      const pmDesc = document.querySelector('[data-project-modal-desc]')
      const pmGithub = document.querySelector('[data-project-modal-github]')
      const pmLive = document.querySelector('[data-project-modal-live]')

      const portfolioModalToggle = () => {
        if (portfolioModalContainer && portfolioOverlay) {
          portfolioModalContainer.classList.toggle('active')
          portfolioOverlay.classList.toggle('active')
        }
      }

      projectAnchors.forEach((a) => {
        a.addEventListener('click', function (e) {
          e.preventDefault()
          
          const imgEl = this.querySelector('img')
          const titleEl = this.querySelector('.project-title')
          const desc = this.dataset.projectDesc || 'No description available.'
          const tech = this.dataset.projectTech || 'Not specified'
          const gh = this.dataset.projectGithub || ''
          const live = this.dataset.projectLive || ''
          
          if (pmImg && imgEl) {
            pmImg.src = imgEl.src
            pmImg.alt = imgEl.alt || titleEl?.textContent || 'Project'
          }
          
          if (pmTitle && titleEl) {
            pmTitle.textContent = titleEl.textContent
          }
          
          if (pmTech) {
            pmTech.textContent = tech
          }
          
          if (pmDesc) {
            pmDesc.textContent = desc
          }
          
          if (pmGithub) {
            if (gh && gh !== '#' && gh !== '') {
              pmGithub.href = gh
              pmGithub.style.display = 'flex'
            } else {
              pmGithub.style.display = 'none'
            }
          }
          
          if (pmLive) {
            if (live && live !== '#' && live !== '') {
              pmLive.href = live
              pmLive.style.display = 'flex'
            } else {
              pmLive.style.display = 'none'
            }
          }
          
          portfolioModalToggle()
        })
      })

      if (portfolioModalCloseBtn) {
        portfolioModalCloseBtn.addEventListener('click', portfolioModalToggle)
      }
      if (portfolioOverlay) {
        portfolioOverlay.addEventListener('click', portfolioModalToggle)
      }

    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <main>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={portfolioData.personal.avatar}
              alt={portfolioData.personal.name}
              width="80"
            />
          </figure>
          <div className="info-content">
            <h1 className="name" title={portfolioData.personal.name}>
              {portfolioData.personal.name}
            </h1>
            <p className="title">{portfolioData.personal.title}</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="contact-link"
                >
                  {portfolioData.personal.email}
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="contact-link"
                >
                  {portfolioData.personal.phone}
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2002-08-19">
                  {portfolioData.personal.birthday}
                </time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>{portfolioData.personal.location}</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            {portfolioData.social.map((social, index) => (
              <li key={index} className="social-item">
                <a
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>
                About
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Resume
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Portfolio
              </button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* ABOUT PAGE */}
        <article className="about active" data-page="about">
          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>
          <section className="about-text">
            {portfolioData.about.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
          <section className="service">
            <h3 className="h3 service-title">What i'm doing</h3>
            <ul className="service-list">
              {portfolioData.about.services.map((service, index) => (
                <li key={index} className="service-item">
                  <div className="service-icon-box">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width="40"
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{service.title}</h4>
                    <p className="service-item-text">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* RESUME PAGE */}
        <article className="resume" data-page="resume">
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          {/* Education Section */}
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              {portfolioData.education.map((edu, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">{edu.institution}</h4>
                  <span>{edu.period}</span>
                  <p className="timeline-text">{edu.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Experience Section */}
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
              {portfolioData.experience.map((exp, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">{exp.company}</h4>
                  {exp.period && <span>{exp.period}</span>}
                  <p className="timeline-text">{exp.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Certifications Section */}
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="ribbon-outline"></ion-icon>
              </div>
              <h3 className="h3">Certifications</h3>
            </div>
            <ol className="timeline-list">
              {portfolioData.certifications.map((cert, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">{cert.title}</h4>
                  <span>{cert.issuer}</span>
                  <p className="timeline-text">{cert.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Internships Section */}
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>
              <h3 className="h3">Internships</h3>
            </div>
            <ol className="timeline-list">
              {portfolioData.internships.map((internship, index) => (
                <li key={index} className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    {internship.company}
                  </h4>
                  <span>
                    {internship.role} | {internship.period}
                  </span>
                  <p className="timeline-text">{internship.description}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Skills Section */}
          {/* Technical Skills Section */}
          <section className="skill">
            <h3 className="h3 skills-title">Technical Skills</h3>

            <ul className="tech-skills-list content-card">
              {portfolioData.techSkills.map((skill, index) => (
                <li key={index} className="tech-skill-item">
                  <div className="tech-icon-box">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h5 className="h5">{skill.name}</h5>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* PORTFOLIO PAGE */}
        <article className="portfolio" data-page="portfolio">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <section className="projects">
            {/* Filter Buttons */}
            <ul className="filter-list">
              {getUniqueCategories().map((category, index) => (
                <li key={index} className="filter-item">
                  <button
                    className={index === 0 ? "active" : ""}
                    data-filter-btn
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Filter Select */}
            <div className="filter-select-box">
              <button className="filter-select" data-select>
                <div className="select-value" data-select-value>
                  Select category
                </div>
                <div className="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>
              <ul className="select-list">
                {getUniqueCategories().map((category, index) => (
                  <li key={index} className="select-item">
                    <button data-select-item>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project List */}
            <ul className="project-list">
              {portfolioData.projects.map((project) => (
                <li
                  key={project.id}
                  className="project-item active"
                  data-filter-item
                  data-category={project.category}
                >
                  <a
                    href="#"
                    data-project-desc={project.description}
                    data-project-tech={project.tech}
                    data-project-github={project.github}
                    data-project-live={project.live}
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Portfolio Modal */}
          <div className="modal-container" data-portfolio-modal-container>
            <div className="overlay" data-portfolio-overlay></div>
            <section className="portfolio-modal">
              <button
                className="modal-close-btn"
                data-portfolio-modal-close-btn
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="modal-img-wrapper">
                <figure className="modal-project-img">
                  <img data-project-modal-img alt="Project" />
                </figure>
              </div>

              <div className="modal-content">
                <h3 className="modal-title" data-project-modal-title>
                  Project Name
                </h3>

                <div className="modal-section">
                  <div className="modal-label">
                    <ion-icon name="code-slash-outline"></ion-icon>
                    <span>Technologies</span>
                  </div>
                  <p className="modal-tech" data-project-modal-tech>
                    Technology stack
                  </p>
                </div>

                <div className="modal-section">
                  <div className="modal-label">
                    <ion-icon name="information-circle-outline"></ion-icon>
                    <span>Description</span>
                  </div>
                  <p className="modal-desc" data-project-modal-desc>
                    Project description will appear here
                  </p>
                </div>

                <div className="modal-actions">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-github"
                    data-project-modal-github
                  >
                    <ion-icon name="logo-github"></ion-icon>
                    <span>View Code</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-live"
                    data-project-modal-live
                  >
                    <ion-icon name="rocket-outline"></ion-icon>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* CONTACT PAGE */}
        <article className="contact" data-page="contact">
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60341.25549261667!2d72.89001848108783!3d19.05987554070482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689234567890!5m2!1sen!2sin"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>
          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form action="#" className="form" data-form>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Full name"
                  required
                  data-form-input
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>
              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                required
                data-form-input
              ></textarea>
              <button className="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </main>
  );
}

export default App;