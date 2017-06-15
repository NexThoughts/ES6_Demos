/**
 * Created by chetan on 15/6/17.
 */

"use strict";
let kevin = {
  profile_image: 'http://lorempixel.com/300/300',
  name: 'Kevin',
  title: 'Mover, Shaker, Risk Taker'
}

function get_user_widget_markup (user) {
  return `<div class="user-profile">
    <img src="${user.profile_image}" alt="" class="user-image">
    <h2 class="user-name">${user.name}</h2>
    <p class="user-title">${user.title}</p>
  </div>`
}

console.log(get_user_widget_markup(kevin));