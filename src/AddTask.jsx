import React from 'react';
import BX24API from './bx24';


export const AddTask = () => {
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
  return <div>
    
    <button onClick={add}>Добавить задачу</button>
    <button onClick={add2}>Добавить в консоль ответ</button>
        </div>;
};