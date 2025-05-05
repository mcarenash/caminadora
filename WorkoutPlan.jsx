import { useState } from 'react';
import { CheckSquare, Square, ArrowDown, ArrowUp, Award, AlertTriangle, Info } from 'lucide-react';

export default function WorkoutPlan() {
  const [expandedWeek, setExpandedWeek] = useState(1);
  const [completedWorkouts, setCompletedWorkouts] = useState({
    "1-lunes": true
  });
  const [notes, setNotes] = useState({
    "1-lunes": "Caminata en Life Fitness (Madrid). Duración: 1:00:47, Distancia: 5.79 km, FC prom: 151 LPM, Ritmo: 10'29''/km, Calorías: 518 kcal, Esfuerzo: Moderado (6)"
  });
  
  const toggleWorkoutCompletion = (weekNum, dayKey) => {
    const key = ${weekNum}-${dayKey};
    setCompletedWorkouts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const updateNote = (weekNum, dayKey, value) => {
    const key = ${weekNum}-${dayKey};
    setNotes(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const weeks = [
    {
      number: 1,
      title: "Semana de Adaptación",
      days: [
        {
          key: "lunes",
          title: "Lunes: Entrenamiento base ✓",
          details: [
            "Entrenamiento realizado el 5 de mayo",
            "Duración real: 1:00:47",
            "Distancia recorrida: 5.79 km",
            "Frecuencia cardíaca promedio: 151 LPM",
            "Ritmo promedio: 10'29''/km",
            "Calorías quemadas: 518 kcal (436 activas)"
          ],
          stats: "Esfuerzo: Moderado (6) | Life Fitness Madrid"
        },
        {
          key: "martes",
          title: "Martes: Intervalos cortos",
          details: [
            "Calentamiento: 5 min a 5.3 km/h",
            "8 repeticiones de:",
            "• 1 min a 6.5 km/h (FC hasta 160 LPM)",
            "• 2 min a 5.0 km/h (recuperación)",
            "Enfriamiento: 5 min a 4.8 km/h"
          ],
          stats: "Duración: 35 min | Distancia: ~3.0 km"
        },
        {
          key: "jueves",
          title: "Jueves: Entrenamiento en pendiente",
          details: [
            "Calentamiento: 5 min a 5.3 km/h (0%)",
            "Bloque 1: 8 min a 5.5 km/h (2%)",
            "Bloque 2: 8 min a 5.5 km/h (3%)",
            "Bloque 3: 8 min a 5.5 km/h (4%)",
            "Bloque 4: 6 min a 5.5 km/h (2%)",
            "Enfriamiento: 5 min a 4.8 km/h (0%)"
          ],
          stats: "Duración: 40 min | Distancia: ~3.6 km"
        },
        {
          key: "viernes",
          title: "Viernes: Intervalos escalados",
          details: [
            "Calentamiento: 5 min a 5.3 km/h",
            "3 repeticiones de:",
            "• 5 min a 5.7 km/h",
            "• 3 min a 6.0 km/h",
            "• 1 min a 6.5 km/h",
            "• 2 min a 5.0 km/h (recuperación)",
            "Enfriamiento: 5 min a 4.8 km/h"
          ],
          stats: "Duración: 43 min | Distancia: ~3.9 km"
        },
        {
          key: "sabado",
          title: "Sábado: Resistencia progresiva",
          details: [
            "Calentamiento: 5 min a 5.3 km/h",
            "Bloque 1: 15 min a 5.5 km/h",
            "Bloque 2: 15 min a 5.7 km/h",
            "Bloque 3: 10 min a 5.9 km/h",
            "Bloque 4: 5 min a 6.1 km/h",
            "Enfriamiento: 5 min a 4.8 km/h"
          ],
          stats: "Duración: 55 min | Distancia: ~5.0 km"
        }
      ]
    },
    {
      number: 2,
      title: "Semana de Progresión",
      days: [
        {
          key: "lunes",
          title: "Lunes: Entrenamiento base +",
          details: [
            "Calentamiento: 5 min a 5.5 km/h",
            "Principal: 50 min a 5.7 km/h (FC 145-155 LPM)",
            "Enfriamiento: 5 min a 4.8 km/h"
          ],
          stats: "Duración: 60 min | Distancia: ~5.7 km"
        },
        {
          key: "martes",
          title: "Martes: Intervalos cortos intensivos",
          details: [
            "Calentamiento: 5 min a 5.5 km/h",
            "10 repeticiones de:",
            "• 1.5 min a 6.8 km/h (FC hasta 165 LPM)",
            "• 1.5 min a 5.2 km/h (recuperación)",
            "Enfriamiento: 5 min a 4.8 km/h"
          ],
          stats: "Duración: 40 min | Distancia: ~3.7 km"
        },
        {
          key: "jueves",
          title: "Jueves: Pendiente progresiva",
          details: [
            "Calentamiento: 5 min a 5.5 km/h (0%)",
            "Bloque 1: 10 min a 5.7 km/h (2%)",
            "Bloque 2: 10 min a 5.7 km/h (3%)",
            "Bloque 3: 5 min a 5.7 km/h (4%)",
            "Bloque 4: 5 min a 5.7 km/h (5%)",
            "Bloque 5: 5 min a 5.5 km/h (2%)",
            "Enfriamiento: 5 min a 4.8 km/h (0%)"
          ],
          stats: "Duración: 45 min | Distancia: ~4.3 km"
        },
        {
          key: "viernes",
          title: "Viernes: Pirámide de intensidad",
          details: [
            "Calentamiento: 5 min a 5.5 km/h",
            "Fase 1 (ascendente):",
            "• 5 min a 5.5 km/h",
            "• 5 min a 5.8 km/h",
            "• 5 min a 6.1 km/h",
            "• 3 min a 6.4 km/h",
            "Fase 2 (descendente):",
            "• 5 min a 6.1 km/h",
            "• 5 min a 5.8 km/h",
            "• 5 min a 5.5 km/h",
            "Enfriamiento: 5 min a 4.8 km/h"
          ],
          stats: "Duración: 48 min | Distancia: ~4.6 km"
        },
        {
          key: "sabado",
          title: "Sábado: Resistencia constante",
          details: [
            "Calentamiento: 5 min a 5.5 km/h",
            "Bloque principal: 55 min a 5.8 km/h (mantén FC 145-155 LPM)",
            "Enfriamiento: 5 min a 4.8 km/h"
          ],
          stats: "Duración: 65 min | Distancia: ~6.2 km"
        }
      ]
    },
    {
      number: 3,
      title: "Semana de Intensidad",
      days: [
        {
          key: "lunes",
          title: "Lunes: Velocidad constante",
          details: [
            "Calentamiento: 5 min a 5.7 km/h",
            "Principal: 55 min a 6.0 km/h (FC 150-160 LPM)",
            "Enfriamiento: 5 min a 5.0 km/h"
          ],
          stats: "Duración: 65 min | Distancia: ~6.5 km"
        },
        {
          key: "martes",
          title: "Martes: HIIT adaptado",
          details: [
            "Calentamiento: 5 min a 5.7 km/h",
            "12 repeticiones de:",
            "• 1 min a 7.0 km/h (FC hasta 170 LPM)",
            "• 1 min a 5.5 km/h (recuperación)",
            "Enfriamiento: 5 min a 5.0 km/h"
          ],
          stats: "Duración: 35 min | Distancia: ~3.5 km"
        },
        {
          key: "jueves",
          title: "Jueves: Desafío de pendiente",
          details: [
            "Calentamiento: 5 min a 5.7 km/h (0%)",
            "4 repeticiones de:",
            "• 5 min a 5.9 km/h (pendiente 3%)",
            "• 3 min a 5.5 km/h (pendiente 1%)",
            "Bloque final: 5 min a 6.1 km/h (pendiente 2%)",
            "Enfriamiento: 5 min a 5.0 km/h (0%)"
          ],
          stats: "Duración: 45 min | Distancia: ~4.3 km"
        },
        {
          key: "viernes",
          title: "Viernes: Intervalos avanzados",
          details: [
            "Calentamiento: 5 min a 5.7 km/h",
            "Bloque 1: 5 min a 6.0 km/h",
            "Bloque 2: 3 repeticiones de:",
            "• 3 min a 6.3 km/h",
            "• 2 min a 6.7 km/h",
            "• 1 min a 7.0 km/h",
            "• 2 min a 5.5 km/h (recuperación)",
            "Enfriamiento: 5 min a 5.0 km/h"
          ],
          stats: "Duración: 50 min | Distancia: ~5.0 km"
        },
        {
          key: "sabado",
          title: "Sábado: Prueba de resistencia",
          details: [
            "Calentamiento: 5 min a 5.7 km/h",
            "Objetivo: Mantener una velocidad de 6.0 km/h durante 60 min",
            "Enfriamiento: 5 min a 5.0 km/h"
          ],
          stats: "Duración: 70 min | Distancia: ~7.0 km"
        }
      ]
    }
  ];
  
  const completedCount = Object.values(completedWorkouts).filter(Boolean).length;
  const totalWorkouts = weeks.reduce((acc, week) => acc + week.days.length, 0);
  const progressPercentage = Math.round((completedCount / totalWorkouts) * 100);
  
  return (
    <div className="flex flex-col max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-2">Plan Intensivo de Caminadora</h1>
      <p className="text-center text-gray-600 mb-6">5 días/semana - Enfocado en quema de grasa y mejora de condición física</p>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Tu progreso</h2>
            <p className="text-gray-600">{completedCount} de {totalWorkouts} entrenamientos completados</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">{progressPercentage}%</span>
            <Award className="ml-2 text-yellow-500" size={24} />
          </div>
        </div>
        
        <div className="mt-2 bg-gray-200 rounded-full h-4">
          <div 
            className="bg-green-500 h-4 rounded-full" 
            style={{ width: ${progressPercentage}% }}
          ></div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-700 mb-1">Último entrenamiento: Lunes, 5 de mayo</h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white p-2 rounded border border-gray-200">
              <p className="text-gray-500">Distancia</p>
              <p className="text-lg font-bold text-blue-600">5.79 km</p>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200">
              <p className="text-gray-500">Tiempo</p>
              <p className="text-lg font-bold text-blue-600">1:00:47</p>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200">
              <p className="text-gray-500">FC Promedio</p>
              <p className="text-lg font-bold text-red-500">151 LPM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded shadow">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Recomendaciones importantes</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Descansa completamente los miércoles y domingos</li>
                <li>Mantén una buena hidratación antes, durante y después</li>
                <li>Si sientes dolor (no fatiga), detén el entrenamiento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {weeks.map((week) => (
        <div key={week.number} className="mb-4 bg-white rounded-lg shadow overflow-hidden">
          <div 
            className="p-4 bg-blue-500 text-white cursor-pointer flex justify-between items-center"
            onClick={() => setExpandedWeek(expandedWeek === week.number ? null : week.number)}
          >
            <h2 className="text-lg font-semibold">Semana {week.number}: {week.title}</h2>
            {expandedWeek === week.number ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
          </div>
          
          {expandedWeek === week.number && (
            <div className="p-4">
              {week.days.map((day) => {
                const workoutKey = ${week.number}-${day.key};
                const isCompleted = completedWorkouts[workoutKey];
                
                return (
                  <div key={day.key} className="mb-6 last:mb-0 border-b pb-4 last:border-0">
                    <div className="flex items-start">
                      <div 
                        className="mt-1 mr-2 cursor-pointer" 
                        onClick={() => toggleWorkoutCompletion(week.number, day.key)}
                      >
                        {isCompleted ? 
                          <CheckSquare className="text-green-500" size={20} /> : 
                          <Square className="text-gray-400" size={20} />
                        }
                      </div>
                      <div className="flex-1">
                        <h3 className={font-medium ${isCompleted ? 'text-green-600' : 'text-gray-800'}}>
                          {day.title}
                        </h3>
                        <ul className="mt-2 text-sm text-gray-600 space-y-1">
                          {day.details.map((detail, i) => (
                            <li key={i} className={isCompleted ? 'line-through text-gray-400' : ''}>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-2 text-sm font-medium text-blue-500">{day.stats}</p>
                        
                        <div className="mt-3">
                          <textarea
                            className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            placeholder="Notas sobre tu entrenamiento..."
                            rows="2"
                            value={notes[workoutKey] || ''}
                            onChange={(e) => updateNote(week.number, day.key, e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
      
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Info className="mr-2 text-blue-500" size={20} />
          Consejos para maximizar resultados
        </h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Intenta mantener tu frecuencia cardíaca entre 140-160 LPM para optimizar la quema de grasa</li>
          <li>• Combina este entrenamiento con una alimentación controlada en calorías (déficit de 300-500 kcal/día)</li>
          <li>• Consume proteínas de calidad (1.6-1.8g/kg de peso corporal)</li>
          <li>• Prioriza el descanso: duerme 7-8 horas para una recuperación adecuada</li>
          <li>• Considera añadir 2 sesiones semanales de entrenamiento de fuerza para potenciar resultados</li>
          <li>• Monitorea tu progreso semanalmente (peso, medidas, sensación de esfuerzo)</li>
        </ul>
      </div>
    </div>
  );
}
