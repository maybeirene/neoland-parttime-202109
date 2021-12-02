<form
  onSubmit={(e) => {
    e.preventDefault();

    var query = e.target.query.value;

    try {
      searchVehicles(query, (error, vehicles) => {
        if (error) return alert(error.message);
        this.setState({ vehicles });
      });
    } catch (error) {
      alert(error.message);
    }
  }}
>
  <input type="text" name="query" placeholder="Buscar..."></input>
  <button>Search</button>
</form>;
