"use client"
import Sidebar from "@/_components/Sidebar/Sidebar"
import EvaluationsTable from "./components/EvaluationTable/EvaluationsTable"

export default function Evaluations() {
  return (
    <Sidebar title={"Evaluaciones"}>
      <EvaluationsTable />
    </Sidebar>
  )
}
