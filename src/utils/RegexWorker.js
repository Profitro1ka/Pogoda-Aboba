export class RegexWorker {
    static dataIsValid = (lat, lon, setDataIsCorrect) => {
        const reg = new RegExp('^-?(([1-9]\\d*)|0)(.0*[1-9](0*[1-9])*)?$')
        const res = reg.test(lat) && reg.test(lon)
        setDataIsCorrect(res)
        return res;
    }

}