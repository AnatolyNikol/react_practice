import './OnOff.css'

type OnOffPropsType = {
    /**
     * Value of switcher
     * */
    isOn: boolean
    /**
     * Value switching
     * */
    onClick: (isOn: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    console.log('OnOff rendering')

    return (
        <div className={'container'}>
            <div className={props.isOn ? 'switcher' + ' ' + 'on' : 'switcher'} onClick={() => props.onClick(true)}>On</div>
            <div className={props.isOn ? 'switcher' : 'switcher' + ' ' + 'off'} onClick={() => props.onClick(false)}>Off</div>
            <div className={props.isOn ? 'indicator' + ' ' + 'on' : 'indicator' + ' ' + 'off'}></div>
        </div>
    )
}