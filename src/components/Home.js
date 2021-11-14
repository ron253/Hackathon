

import Inputs from "../components/Input"

function Home() {
    return (
    <div className="App  card-component">
    <header className="App-header">
      <img id = "home-img" className = "imgs" src = "https://mail.google.com/mail/u/0?ui=2&ik=8ec35054a3&attid=0.1&permmsgid=msg-f:1716377560012076008&th=17d1cc4c0cf8b3e8&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_WYyFLvP59lj3XmYP-xhsw0tGouTDMC74AjQVXHlSE198Wqeb7UMlXOva4X1bnMvFnzf3Y6cX2KyCMBdt1VFJcyg58mcUjf_gIVjasxW8qbbg-pH1Wozb_Pws&disp=emb&realattid=ii_kvyr8y850" />
   
      <Inputs />
    </header>
  </div>
    )

}

export default Home;
