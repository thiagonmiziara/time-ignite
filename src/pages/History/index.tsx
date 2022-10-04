import {
  HistoryContainer,
  HistoryList,
  HistoryTable,
  HistoryTD,
  HistoryTH,
  Status,
} from './styles'

export function History() {
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
            <tr>
              <HistoryTD>Tarefa</HistoryTD>
              <HistoryTD>20 minutos</HistoryTD>
              <HistoryTD>Há 2 meses</HistoryTD>
              <HistoryTD>
                <Status statusColor="yellow">Em andamento</Status>
              </HistoryTD>
            </tr>
            <tr>
              <HistoryTD>Tarefa</HistoryTD>
              <HistoryTD>20 minutos</HistoryTD>
              <HistoryTD>Há 2 meses</HistoryTD>
              <HistoryTD>
                <Status statusColor="green">Concluído</Status>
              </HistoryTD>
            </tr>
            <tr>
              <HistoryTD>Tarefa</HistoryTD>
              <HistoryTD>20 minutos</HistoryTD>
              <HistoryTD>Há 2 meses</HistoryTD>
              <HistoryTD>
                <Status statusColor="red">Interrompido</Status>
              </HistoryTD>
            </tr>
          </tbody>
        </HistoryTable>
      </HistoryList>
    </HistoryContainer>
  )
}
