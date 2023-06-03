import { YMaps, Map } from '@pbe/react-yandex-maps'
export function Contacts() {
  return (
    <>
      <div>Контакты</div>
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </YMaps>
    </>
  )
}
