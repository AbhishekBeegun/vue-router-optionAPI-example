<template>
  <div class="home">
  <h1>Homeppage</h1>

  <h3>Router example + option API</h3>

  <p>https://www.youtube.com/watch?v=juocv4AtrHo&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=8</p>
  <h2>JSON SERVER NPX JSON-server --watch db.json</h2>

  <p>option api example  => mounted(){
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }</p>

 <p>SELECT ROUTER(*) WHEN VUE CREATE APP NAME</p>
 <p>ROUte system Similar to NEXT 13</P>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>
