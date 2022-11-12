
import { Container, ContentContainer, Content, Row } from "./syles";
import Input from './components/Input';
import Button from './components/Button';

import { useState } from 'react';


function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [fistNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
  }

  const handleDelNumber = () => {
    const str = String(currentNumber);
    const str2 = str.substring(0, str.length - 1);
    setCurrentNumber(String(str2));
  }

  const handleSumNumbers = () => {
    
    if(fistNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      let num1 = String(fistNumber).replace(',','.');
      let num2 = String(currentNumber).replace(',','.');
      const sum = Number(num1) + Number(num2);
      setCurrentNumber(String(sum));
      setOperation('')
    }

  }

  const handleSubNumbers = () => {

    if(fistNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else{
      let num1 = String(fistNumber).replace(',','.');
      let num2 = String(currentNumber).replace(',','.');
      const sub = Number(num1) - Number(num2);
      setCurrentNumber(String(sub));
      setOperation('')
    }

  }

  const handleDivisionNumbers = () => {

    if(fistNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else{
      let num1 = String(fistNumber).replace(',','.');
      let num2 = String(currentNumber).replace(',','.');
      const divi = Number(num1) / Number(num2);
      setCurrentNumber(String(divi));
      setOperation('')
    }

  }

  const handleMultipleNumbers = () => {
    if(fistNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }else{
      let num1 = String(fistNumber).replace(',','.');
      let num2 = String(currentNumber).replace(',','.');
      const multi = Number(num1) * Number(num2);
      setCurrentNumber(String(multi));
      setOperation('')
    }

  }

  const handlePercentNumbers = () => {

      const perc = Number(currentNumber) / 100;
      let result = String(perc).replace('.',',');
      setCurrentNumber(result);

  }

  const handleEquals = () => {

    if(fistNumber != '0' && operation != '' && currentNumber != '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
        case '*':
          handleMultipleNumbers();
          break;
          default:
          break;
      }
    }

  }

  return (
    <div className="App">
      <Container>
        <ContentContainer>
          <Content>

            <Input value={currentNumber}/>

            <Row>
              <Button label={'%'} onClick={handlePercentNumbers}/>
              <Button label={'CE'} onClick={handleClear}/>
              <Button label={'C'} onClick={handleClear}/>
              <Button label={'DEL'} onClick={handleDelNumber}/>
            </Row>
            <Row>
              <Button label={1}   onClick={() => handleAddNumber('1')}/>
              <Button label={2}   onClick={() => handleAddNumber('2')}/>
              <Button label={3}   onClick={() => handleAddNumber('3')}/>
              <Button label={'+'} onClick={handleSumNumbers}/>
            </Row>
            <Row>
              <Button label={4}   onClick={() => handleAddNumber('4')}/>
              <Button label={5}   onClick={() => handleAddNumber('5')}/>
              <Button label={6}   onClick={() => handleAddNumber('6')}/>
              <Button label={'-'} onClick={handleSubNumbers}/>
            </Row>
            <Row>
              <Button label={7}   onClick={() => handleAddNumber('7')}/>
              <Button label={8}   onClick={() => handleAddNumber('8')}/>
              <Button label={9}   onClick={() => handleAddNumber('9')}/>
              <Button label={'/'} onClick={handleDivisionNumbers}/>
            </Row>
            <Row>
              <Button label={'X'} onClick={handleMultipleNumbers}/>
              <Button label={0}   onClick={() => handleAddNumber('0')}/>
              <Button label={','} onClick={() => handleAddNumber(',')}/>
              <Button label={'='} onClick={handleEquals}/>
            </Row>

          </Content>
        </ContentContainer>
      </Container>
    </div>
  );
}

export default App;
