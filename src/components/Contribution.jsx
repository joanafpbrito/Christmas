
import '../componentsCSS/contribution.css'
import { useNavigate } from 'react-router-dom';


function Contribution() {
  const navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      console.log(data);
      
      const contributor = {
        firstName: data['first-name'],
        lastName: data['last-name'],
        institution: data.institution,
        item: data.item,
        termsAccepted: data.terms === "on",
      }
console.log(contributor);


        const response = fetch ("http://localhost:2024/users.json", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(contributor)
      })

      navigate("/total-contributions", {state: { message: "Lots of kisses were successfully added to your life!"}});
    }



    return (
      <form onSubmit={handleSubmit}>
        <h2>Hey you!</h2>
        <p>Este Natal vamos mais longe, e não deixamos ninguém para trás 🚀</p>
  
          <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required/>
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required/>
          </div>
        </div>
    <hr />
        <div className="control">
          <label htmlFor="phone">Which Item you want to send?</label>
          <select id="item" name="item">
            <option value="mantas">Mantas</option>
            <option value="biscoitos">Biscoitos</option>
            <option value="trelas">Trelas</option>
            <option value="shampôs">Shampôs</option>
            <option value="condroprotetores">Condroprotetores</option>
            <option value="camisolas">Camisolas</option>
            <option value="arranhadores">Arranhadores</option>
            <option value="coleiras">Coleiras</option>
            <option value="camas">Camas</option>
            <option value="casotas">Casotas</option>
            <option value="brinquedos">Brinquedos</option>
            <option value="comida">Comida</option>
          </select>
        </div>

  
        <div className="control">
          <label htmlFor="phone">Which Institution you want to send help?</label>
          <select id="institution" name="institution">
            <option value="cao-ou-sem-casa">Cão ou Sem Casa?</option>
            <option value="patinhas-patudos">Patinhas & Patudos</option>
            <option value="patas-tino">Patas & Tino</option>
            <option value="mar-animais">MarAnimais</option>
            <option value="aanifeira">Aanifeira</option>
            <option value="ani-sao-joao">Ani-São João</option>
            <option value="resgato">ResGato</option>
            <option value="ira">IRA</option>
            <option value="midas">Midas</option>
            <option value="animais-de-rua">Animais de Rua</option>
            <option value="sos-animal">SOS Animal</option>
            <option value="canil-intermunicipal">Canil Intermunicipal</option>
          </select>
        </div>
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" required/>I
            agree to receive kisses from all the little paws)
          </label>
        </div>
  
        <p className="form-actions">
          <button type="submit" className="button"> Submit </button>
        </p>
      </form>
    );
  }

  export default Contribution;