import './Main.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BX24API from '../../bx24';


function Main() {
  const add = async () => {
          console.log('думаю')
          const result = await BX24API.callMethod('crm.item.add', {
              entityTypeId: 1036,
              fields: {
                  TITLE: 'название смарта с тестами7',
                  RESPONSIBLE_ID: 1,
                  ufCrm_3_1744202282: 'Ответ на вопрос 1',
                  ufCrm_3_1744202301: 27
              }
          });
          console.log(result)
      }
const add2 = async () => {
        console.log('думаю')
        const result = await BX24API.callMethod('lists.element.get', {
            IBLOCK_TYPE_ID: 'lists',
            IBLOCK_ID: 16
        });
        console.log(result)
    }
  return (
    <>
      <div>
        <h1>Чтобы закрепить материал сегодняшнего урока, ответьте на вопросы нашего небольшого теста. Они несложные, но помогут вам лучше запомнить материал и увидеть, к каким разделам урока стоит вернуться и изучить их еще раз</h1>
        <div className="wrapper">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">1.	Кто такой ЦК для нашей компании?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Производитель продукции, для которой нужна нестандартная упаковка большими тиражами (от 4000 шт в год) и с определенной периодичностью (раз в квартал)" control={<Radio />} label="Производитель продукции, для которой нужна нестандартная упаковка большими тиражами (от 4000 шт в год) и с определенной периодичностью (раз в квартал)" />
            <FormControlLabel value="Производитель или дистрибьютор продукции, которой нужна упаковка большими тиражами (от 1 000 шт в год) не менее 2 раз в год" control={<Radio />} label="Производитель или дистрибьютор продукции, которой нужна упаковка большими тиражами (от 1 000 шт в год) не менее 2 раз в год" />
            <FormControlLabel value="Производитель стандартной или нестандартной продукции, которому нужна стандартная или нестандартная упаковка не менее 4 раз в год" control={<Radio />} label="Производитель стандартной или нестандартной продукции, которому нужна стандартная или нестандартная упаковка не менее 4 раз в год" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">2.	Проверьте в чекко, какая из этих организаций подходит под определение ЦК по сфере и обороту?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="1650032058 (Камаз)" control={<Radio />} label="1650032058 (Камаз)" />
            <FormControlLabel value="7701215046 (Мултон Партнерс)" control={<Radio />} label="7701215046 (Мултон Партнерс)" />
            <FormControlLabel value="7708333955 (Айти Экспо Интернешнл)" control={<Radio />} label="7708333955 (Айти Экспо Интернешнл)" />
          </RadioGroup>
        </FormControl>
        </div>
        <button onClick={add}>Добавить задачу</button>
        <button onClick={add2}>Добавить в консоль ответ</button>
    </div>
    </>
  )
}

export default Main
