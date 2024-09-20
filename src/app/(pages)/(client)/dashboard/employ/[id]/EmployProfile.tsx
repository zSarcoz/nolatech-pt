import { Avatar, Skeleton } from "@mui/material"

import FlagIcon from "@mui/icons-material/Flag"
import ArticleIcon from "@mui/icons-material/Article"

import useStates from "./useStates/useStates"

import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

export default function EmployProfile() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const { employ, evaluationHistory } = useStates()

  return (
    <div className="w-full h-full ">
      {employ.length > 0 ? (
        <>
          {/* Header */}
          <div className="flex items-center justify-between gap-5 border-2 border-[#efefef] p-4 rounded-xl">
            <div className="flex items-center">
              <Avatar
                src="https://cdn.fakercloud.com/avatars/ricburton_128.jpg"
                sx={{
                  width: isMobile ? "4rem" : "8rem",
                  height: isMobile ? "4rem" : "8rem"
                }}
              />
              <div className="flex flex-col ml-2 lg:ml-5">
                <h1 className="font-roboto font-bold text-primary text-2xl lg:text-3xl">
                  {employ[0].name}
                </h1>
                <p className="font-roboto text-gray-400 text-sm lg:text-base">{employ[0].email}</p>
                <p className="font-roboto text-gray-400 text-sm lg:text-base">{employ[0].role}</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-lg lg:text-3xl text-primary">
                {employ[0].country}
                <FlagIcon fontSize={isMobile ? "small" : "large"} />
              </h1>
            </div>
          </div>

          {/* Personal & Professional Info */}
          <div className="mt-10 flex w-full justify-between flex-col lg:flex-row">
            {/* Personal Info */}
            <div className="w-full lg:w-2/5 h-60 border-2 border-[#efefef] rounded-xl mb-10 lg:mb-0">
              <h1 className="font-roboto font-bold text-primary text-2xl p-4 text-center">
                Informacion Personal
              </h1>
              <div className="flex flex-col p-4">
                <p className="font-roboto ">
                  <span className="font-bold">Nombre: </span> {employ[0].name}{" "}
                  {employ[0].lastname}
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Email: </span>
                  <a href="mailto:ansjas@gmail.com" className="text-primary">
                    {employ[0].email}
                  </a>
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Telefono:</span> {employ[0].phone}
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Pais:</span> {employ[0].country}
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Direccion:</span>{" "}
                  {employ[0].address}
                </p>
              </div>
            </div>
            {/* Professional Info */}
            <div className="w-full lg:w-2/5 h-60 border-2 border-[#efefef] rounded-xl">
              <h1 className="font-roboto font-bold text-primary text-2xl p-4 text-center">
                Informacion Profesional
              </h1>
              <div className="flex flex-col p-4">
                <p className="font-roboto ">
                  <span className="font-bold">Sector: </span> {employ[0].role}
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Email empresa: </span>
                  <a href="mailto:ansjas@gmail.com" className="text-primary">
                    {employ[0].bussinessEmail}
                  </a>
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Working years:</span>{" "}
                  {employ[0].timeWorking}
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Pais donde trabaja:</span>{" "}
                  {employ[0].remotePlaceWorking}
                </p>
                <p className="font-roboto ">
                  <span className="font-bold">Ciudad:</span> {employ[0].city}
                </p>
              </div>
            </div>
          </div>

          {/* Evaluation History */}
          <div className="mt-10 w-full">
            <h1 className="text-2xl font-roboto font-bold text-primary">
              Historial de Evaluaciones
            </h1>
            <div className="mt-5 flex flex-col w-full gap-y-5">
              {evaluationHistory.map((evaluation) => (
                <div
                  key={evaluation.id}
                  className="w-full flex items-center justify-between border-2 border-[#efefef] rounded-xl p-4"
                >
                  <div className="w-1/5 lg:w-1/3 flex items-center gap-5">
                    <ArticleIcon style={{ color: " #767873", display: isMobile ? "none" : "flex" }} />
                    <h1 className="font-roboto font-bold text-sm lg:text-base">
                      Evaluacion Realizada
                    </h1>
                  </div>
                  <div className="w-1/2 flex items-center justify-end gap-3 lg:gap-10">
                    <p className="font-roboto font-bold  text-sm lg:text-base">
                      Fecha: {evaluation.date}
                    </p>
                    <p className="font-roboto font-bold text-sm lg:text-base">Estado: Completada</p>
                    <p className="font-roboto font-bold text-sm lg:text-base">Resultado: 80%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-5 border-2 border-[#efefef] p-4 rounded-xl">
            <div className="flex items-center">
              <Skeleton variant="circular" className="w-32 h-32" />

              <div className="flex flex-col ml-5">
                <Skeleton className="w-48 h-20" />

                <Skeleton className="w-40" />

                <Skeleton className="w-40" />
              </div>
            </div>
            <Skeleton className="w-48 h-20" />
          </div>

          <div className="mt-10 flex w-full justify-between">
            <div className="w-2/5 h-60 border-2 border-[#efefef] rounded-xl">
              <div className="px-10">
                <Skeleton className="w-full h-20" />
                <Skeleton className="w-full h-20" />
                <Skeleton className="w-full h-20" />
              </div>
            </div>
            <div className="w-2/5 h-60 border-2 border-[#efefef] rounded-xl">
              <div className="px-10">
                <Skeleton className="w-full h-20" />
                <Skeleton className="w-full h-20" />
                <Skeleton className="w-full h-20" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
