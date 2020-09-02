import request from 'superagent'

const FitbitApi = 'https://api.fitbit.com/1/user/-/'

export function getApiData () {
    return request
    .get(FitbitApi + 'activities/date/2020-09-02.json')
    .set('Authorization', 'code goes here' )
    .then(response => response.body.summary.steps)
    .catch(console.log('Api Call Error'))
}