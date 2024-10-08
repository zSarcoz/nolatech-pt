"use client"

import React, { useEffect } from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Rating,
  Box,
  Typography
} from "@mui/material"
import { Performance } from "@/assets/data/tables/enums/employsEvaluation.enum"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs, { Dayjs } from "dayjs"
import { CalendarMonth } from "@mui/icons-material"
import useStates from "./useStates/useStates"

interface Evaluation {
  id: number;
  employeeId: number;
  employeeName: string
  performance: string;
  comments: string;
  rating: number;
  date: string
  
}

interface EvaluationModalProps {
  open: boolean
  onClose: () => void
  evaluationSelected: Evaluation
}

const EditEvaluationModal: React.FC<EvaluationModalProps> = ({
  open,
  onClose,
  evaluationSelected
}) => {
  const {
    performance,
    setPerformance,
    comments,
    setComments,
    rating,
    setRating,
    date,
    setDate,
    handleDateChange
  } = useStates()

  const resetStates = () => {
    if (evaluationSelected) {
      setPerformance(evaluationSelected.performance as Performance)
      setComments(evaluationSelected.comments)
      setRating(evaluationSelected.rating)
      setDate(dayjs(evaluationSelected.date))
    }
  }

  const handleAddEvaluation = () => {
    resetStates()
    onClose()
  }

  useEffect(() => {
    if (evaluationSelected) {
      setPerformance(evaluationSelected.performance as Performance)
      setComments(evaluationSelected.comments)
      setRating(evaluationSelected.rating)
      setDate(dayjs(evaluationSelected.date))
    }
  }, [evaluationSelected])

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Editar Evaluacion del Empleado
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Llene todo el formulario para editar el empleado.
        </DialogContentText>
        <Box
          component="form"
          onSubmit={handleAddEvaluation}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <FormControl required>
            <InputLabel>Rendimiento</InputLabel>
            <Select
              value={performance}
              onChange={(e) => setPerformance(e.target.value as Performance)}
            >
              <MenuItem value={Performance.HIGH}>Alto</MenuItem>
              <MenuItem value={Performance.MEDIUM}>Medio</MenuItem>
              <MenuItem value={Performance.LOW}>Bajo</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Comentarios"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            multiline
            rows={4}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography component="legend">Calificacion</Typography>
            <Rating
              name="employee-rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue)
              }}
            />
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Fecha"
              slots={{
                openPickerIcon: CalendarMonth
              }}
              slotProps={{
                textField: {
                  variant: "outlined"
                },
                openPickerButton: {
                  style: { color: "#aaaca6" }
                }
              }}
              sx={{
                width: "100%"
              }}
              value={date}
              onChange={(date) => handleDateChange(date as Dayjs | null)}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={handleAddEvaluation}
          sx={{ backgroundColor: "#035096", color: "white" }}
        >
          Editar Evaluacion
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditEvaluationModal
