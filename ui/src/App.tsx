import React, { useEffect, useState } from 'react';
import './App.css';
import { Api } from './api/shared/api/axios-config';
import { Card } from './components/card/Card';
import { InputSelect } from './components/inputs/input-select/InputSelect';
import { InputText } from './components/inputs/input-text/InputText';

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [select, setSelect] = useState("")

  const fetchAllCountries = async () => {
    const res = await Api.get(`/country/`)
    setCountries(res.data)
  }

  const filterCountries = () => {
    var newCountries = [...countries]
    console.log(newCountries)
    if (search) {
      newCountries = newCountries.filter((c: any) => {
        return c.id.toString().includes(search) ||
        c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        c.capital.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        c.continent.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      })
    }

    if (select) {
      newCountries = newCountries.filter((c: any) => {
        return c.continent.toLocaleLowerCase().includes(select.toLocaleLowerCase())
      })
    }
    return newCountries
  }

  const continents = [
    {id: "Ásia", name: "Ásia"},
    {id: "África", name: "África"},
    {id: "América", name: "América"},
    {id: "Europa", name: "Europa"},
    {id: "Oceania", name: "Oceania"},
  ]

  useEffect(() => {
    if (countries.length <= 0) {
      fetchAllCountries()
    }
  })

  return (
    <>
    <nav>
      <InputText
        placeholder="Pesquisar..."
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <InputSelect
        options={continents}
        onChange={(e: any) => setSelect(e.target.value)}
      />

    </nav>
    {filterCountries().map((c: any) => {
      return (
        <Card
          country={c.name}
          capital={c.capital}
          continent={c.continent}
        />
      )
    })}
    </>
  );
}

export default App;
