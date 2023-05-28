"use client";

import { useState } from "react";
import styles from "./page.module.css";
import currencies from "@/extra/currencies";
import Select from "@/components/select/Select";

export default function Home() {
  const [simple, setSimple] = useState();
  return (
    <main className={styles.main}>
      <div className={styles.select}>
        <h1>React Select</h1>
        <h4>Options Type</h4>
        <h5>{JSON.stringify(currencies[0])}</h5>
        <h4>Returned value</h4>
        <h5>{JSON.stringify(simple)}</h5>
        <Select
          options={currencies}
          displayKey="code"
          uniqueKey="code"
          label="Select"
          onChange={(value) => setSimple(value)}
        />
        <Select
          options={currencies}
          displayKey="code"
          uniqueKey="code"
          returnKey="name"
          label="Select object Key return"
          onChange={(value) => setSimple(value)}
        />

        <Select
          options={currencies}
          displayKey="code"
          uniqueKey="code"
          label="Searchable Select"
          placeholder="With custom placeholder"
          searchable={true}
          onChange={(value) => setSimple(value)}
        />
        <Select
          multiple={true}
          options={currencies}
          displayKey="code"
          uniqueKey="code"
          label="Searchable Multi Select"
          searchable={true}
          onChange={(value) => setSimple(value)}
        />
        <Select
          multiple={true}
          options={currencies}
          defaultValues={["ALL", "INR", { code: "USD" }]}
          defaultValueKey="code"
          displayKey="code"
          uniqueKey="code"
          label="Multi Select with default values"
          searchable={true}
          onChange={(value) => setSimple(value)}
        />
        <Select
          multiple={true}
          options={currencies}
          defaultValues={["ALL", "INR", { code: "USD" }]}
          defaultValueKey="code"
          displayKey="displayName"
          uniqueKey="code"
          returnKey="code"
          label="Custom returns"
          searchable={true}
          onChange={(value) => setSimple(value)}
        />
        <Select
          multiple={true}
          options={currencies}
          defaultValues={["INR", { code: "USD" }]}
          defaultValueKey="code"
          displayKey="displayName"
          uniqueKey="code"
          returnKey="code"
          isOpen={true}
          label="Default Open"
          searchable={true}
          onChange={(value) => setSimple(value)}
        />
      </div>
    </main>
  );
}
