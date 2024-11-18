import classes from "./Home.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Home() {
  return (
    <>
      <main className={classes.main + " d-flex justify-content-between"}>
        <section className={classes.leftSection}>
          <p className="display-6 fw-bolder">
            Hello! <br></br>I'm{" "}
            <span style={{ color: "rgb(236, 72, 153)" }}>Abrar</span>, a
            passionate{" "}
            <span className={classes.skills}>front-end developer </span>
            dedicated to creating visually engaging, user-friendly web
            experiences. I specialize in crafting responsive and interactive
            websites using modern technologies like{" "}
            <span className={classes.skills}>
              HTML, CSS, JavaScript, and frameworks like React and Vue.js.
            </span>
            <br />
            <a
              href="https://www.facebook.com/abrar.toha.1?mibextid=LQQJ4d"
              className={classes.iconLinks}
            >
              <FacebookIcon className={classes.icons} />
            </a>
          </p>
        </section>
        <section className={classes.rightBox}>
          <pre>
            <code>
              <span style={{ color: "rgb(236, 72, 153)" }}>const</span> Abrar =
              <span className={classes.brackets}> &#123;</span>
              <br></br>
              <section className="ps-5 text-wrap">
                name: "Abrar Hossain Chy Toha",<br></br>
                profession: "Student",<br></br>
                skills:{" "}
                <span style={{ color: "rgb(252, 211, 77)" }}>
                  <span className={classes.brackets}>[ </span>'HTML', 'CSS',
                  'JS', 'JQUERY', 'BOOTSTRAP 5', 'MATERIAL UI', 'REACT JS',
                  'REACT REDUX', 'REACT ROUTER', 'VUE JS', 'VUEX', 'VUE ROUTER',
                  'PHP', 'C#', 'MYSQL', 'OOP', 'EXPRESS JS'
                  <span className={classes.brackets}> ]</span>
                </span>
                {","}
                <br></br>
                openToWork:{" "}
                <span style={{ color: "rgb(252, 211, 77)" }}>true</span>,
                <br />
                hireAble: function<span className={classes.brackets}>
                  ()
                </span>{" "}
                <span className={classes.brackets}> &#123;</span>
                <br />
                <span className="ps-5">
                  return <span className={classes.brackets}> (</span>
                  <br />
                  <section className={classes.returnSection}>
                    <span style={{ color: "rgb(34, 211, 238)" }}>this.</span>
                    openToWork && <br />
                    <span style={{ color: "rgb(34, 211, 238)" }}>this.</span>
                    skills.length &gt; 10
                  </section>
                  <span className={"ps-5 " + classes.brackets}>);</span>
                  <br />
                  <span className={classes.brackets}>&#125;</span>
                  <br />
                </span>
              </section>
              <span className={classes.brackets}>&#125;;</span>
            </code>
          </pre>
        </section>
      </main>
    </>
  );
}
