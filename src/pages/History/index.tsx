import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'
import {
  HistoryContainer,
  HistoryList,
  HistoryTable,
  HistoryTD,
  HistoryTH,
  Status,
} from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  console.log('🚀 ~ file: index.tsx:14 ~ History ~ cycles:', cycles)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <HistoryTable>
          <thead>
            <tr>
              <HistoryTH>Tarefa</HistoryTH>
              <HistoryTH>Duração</HistoryTH>
              <HistoryTH>Início</HistoryTH>
              <HistoryTH>Status</HistoryTH>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <HistoryTD>{cycle.task}</HistoryTD>
                  <HistoryTD>{cycle.minutesAmount} minutos</HistoryTD>
                  <HistoryTD>{cycle.startDate.toISOString()}</HistoryTD>
                  <HistoryTD>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </HistoryTD>
                </tr>
              )
            })}
          </tbody>
        </HistoryTable>
      </HistoryList>
    </HistoryContainer>
  )
}
