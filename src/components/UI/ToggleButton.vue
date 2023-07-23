<template>
  <div class="toggle-wrapper">
    <label class="switch">
      <input
        id="togBtn"
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')"
      />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.toggle-wrapper {
  display: flex;
  align-items: center;

  height: 60px;
  width: 70px;
  margin-left: 0.5em;
}

.switch {
  position: absolute;
  display: inline-block;
  width: 70px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #41b883;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #35495e;
}

input:checked + .slider:before {
  background-color: #19222c;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(36px);
}

/*------ ADDED CSS ---------*/
.slider:after {
  content: 'LIGHT';
  color: white;
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 18px;
  left: 4.75em;
  font-size: 10px;
  transition: 0.5s;
}

input:checked + .slider:after {
  content: 'DARK';
  left: 2.3em;
  transition: 0.5s;
}
</style>
