import './OnOff.css'

type OnOffPropsType = {
    isOn: boolean
}

export function OnOff(props: OnOffPropsType) {
    console.log('OnOff rendering')

    return (
        <div className={'container'}>
            <div className={props.isOn ? 'switcher' + ' ' + 'on' : 'switcher'}>On</div>
            <div className={props.isOn ? 'switcher' : 'switcher' + ' ' + 'off'}>Off</div>
            <div className={props.isOn ? 'indicator' + ' ' + 'on' : 'indicator' + ' ' + 'off'}></div>
        </div>
    )
}