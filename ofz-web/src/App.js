import logo from './logo.svg';
import './App.css';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';



function App() {
  return (
    <Paper variant = "outlined" sx = {{p: 1, m: 1}}>
      <Card sx = {{p: 1, m: 1}}>
        <h1> Welcome to Open Flipper Zero (OFZ) </h1>
      </Card>

      <Paper variant = "outlined" sx = {{p: 1, m: 1}}>
        <Card variant = "outlined" sx = {{p: 1, m: 1}}>
          <h2> Check out our links </h2>
        </Card>

        <Paper variant = "outlined" sx = {{p: 1, m: 1}}>
          <Card  variant = "outlined" sx = {{p: 1, m: 1}}>
            <h4> Discord</h4>
            <p> https://discord.gg/J8xuRSTceT </p>
          </Card>

          <Card  variant = "outlined" sx = {{p: 1, m: 1}}>
            <h4> Facebook Group</h4>
            <p> https://www.facebook.com/groups/5059550877481938 </p>
          </Card>

          <Card  variant = "outlined" sx = {{p: 1, m: 1}}>
            <h4> Email </h4>
            <h2> OpenFlipperZero@Gmail.com</h2>  
          </Card> 
        </Paper>
      </Paper> 

      <Card sx = {{p: 1, m: 1}}>
        <p> 
          This site is currently under development, please check back for updates, how to guides and tutorials. 
        </p>
      </Card>
    </Paper>
  );
}

export default App;
