import $ from 'jquery'
import _ from 'lodash'

export function createUser(params, callback) {
  return post('/users', {user: params})
}

function post(url, params, callback) {
  return $.ajax({
    dataType: "json",
    method: 'POST',
    url: url,
    data: params,
  })
}
