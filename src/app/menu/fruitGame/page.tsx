'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Bodies, Body, Engine, Events, Render, Runner, World } from 'matter-js';
import Container from '@/components/Container';

const FRUITS = [
  {
    name: "00_cherry",
    radius: 17 / 2,
  },
  {
    name: "01_strawberry",
    radius: 24 / 2,
  },
  {
    name: "02_grape",
    radius: 31 / 2,
  },
  {
    name: "03_gyool",
    radius: 35 / 2,
  },
  {
    name: "04_orange",
    radius: 45 / 2,
  },
  {
    name: "05_apple",
    radius: 57 / 2,
  },
  {
    name: "06_pear",
    radius: 65 / 2,
  },
  {
    name: "07_peach",
    radius: 81 / 2,
  },
  {
    name: "08_pineapple",
    radius: 89 / 2,
  },
  {
    name: "09_melon",
    radius: 110 / 2,
  },
  {
    name: "10_watermelon",
    radius: 130 / 2,
  },
];
interface Fruit {
  name: string;
  radius: number;
}

interface ExtendedBody extends Body {
  index?: number;
}

const FruitGame = () => {

  const gameRef = useRef<HTMLDivElement | null>(null);
  const [score, setScore] = useState(0); // 점수를 상태 변수로 관리
  const [scale, setScale] = useState(1); // 스케일 상태 초기화


  useEffect(() => {
    const engine = Engine.create();
    const updateGameSize = () => {
      const gameWidth = Math.min(window.innerWidth, 414); // 최대 너비 414 310
      const gameHeight = Math.min(window.innerHeight, 570); // 최대 높이 570 425
  
      // canvas 요소의 너비와 높이를 직접 조정
      render.canvas.width = gameWidth;
      render.canvas.height = gameHeight;
  
      // render.options에도 너비와 높이 적용
      render.options.width = gameWidth;
      render.options.height = gameHeight;
  
      // 뷰포트 업데이트
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: gameWidth, y: gameHeight },
      });
    };

    const updateScale = () => {
      const maxWidth = 414; // 게임 영역의 최대 너비
      const scaleWidth = window.innerWidth / maxWidth; // 윈도우 너비에 따른 스케일 계산
      const newScale = Math.min(scaleWidth, 1); // 스케일이 1을 초과하지 않도록 함
      setScale(newScale); // 스케일 상태 업데이트
    };

    const render = Render.create({
      engine,
      element: gameRef.current!,
      options: {
        wireframes: false,
        background: '#EDEAE6',
        width: 0,
        height: 0,
      },
    });

    const world = engine.world;

    const leftWall = Bodies.rectangle(5, 197.5, 15, 395, {
      isStatic: true,
      render: { fillStyle: '#948E89' },
    });

    const rightWall = Bodies.rectangle(305, 197.5, 15, 395, {
      isStatic: true,
      render: { fillStyle: '#948E89' },
    });

    const ground = Bodies.rectangle(155, 410, 310, 30, {
      isStatic: true,
      render: { fillStyle: '#948E89' },
    });

    const topline = Bodies.rectangle(155, 75, 310, 2, {
      label: 'topLine', // `name` 대신 `label`을 사용했습니다.
      isStatic: true,
      isSensor: true,
      render: { fillStyle: '#948E89' },
    });

    World.add(world, [leftWall, rightWall, ground, topline]);

    Render.run(render);
    Runner.run(engine);

    let currentBody: Body | null = null;
    let currentFruit: Fruit | null = null;
    let disableAction: boolean = false;
    let interval: NodeJS.Timeout | null = null;

    function addFruit(): void {
      const index = Math.floor(Math.random() * 5);
      const fruit = FRUITS[index];

      const body = Bodies.circle(150, 25, fruit.radius, {
        isSleeping: true,
        render: {
          sprite: {
            texture: `/${fruit.name}.png`,
            xScale: 1,
            yScale: 1
          },
        },
        restitution: 0.2,
      }) as ExtendedBody;

      body.index = index; // 'index' 속성을 따로 추가

      currentBody = body;
      currentFruit = fruit;

      World.add(world, body);
    }

    window.addEventListener('resize', updateGameSize);

    window.addEventListener('resize', updateScale);

    updateScale();

    updateGameSize();

    window.onkeydown = (event: KeyboardEvent) => {
      if (disableAction) {
        return;
      }
      switch (event.code) {
        case 'KeyA':
          if (interval) return;

          interval = setInterval(() => {
            if (currentBody && currentFruit && currentBody.position.x - currentFruit.radius > 10)
              Body.setPosition(currentBody, {
                x: currentBody.position.x - 1,
                y: currentBody.position.y,
              });
          }, 5);
          break;
        case 'KeyD':
          if (interval) return;

          interval = setInterval(() => {
            if (currentBody && currentFruit && currentBody.position.x + currentFruit.radius < 300)
              Body.setPosition(currentBody, {
                x: currentBody.position.x + 1,
                y: currentBody.position.y,
              });
          }, 5);
          break;
        case 'KeyS':
          if (currentBody) {
            currentBody.isSleeping = false;
            disableAction = true;

            setTimeout(() => {
              addFruit();
              disableAction = false;
            }, 1000);
          }
          break;
      }
    };

    window.onkeyup = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyA':
        case 'KeyD':
          if (interval) {
            clearInterval(interval);
            interval = null;
          }
          break;
      }
    };

    Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA as ExtendedBody;
        const bodyB = pair.bodyB as ExtendedBody;
        if (bodyA.index === bodyB.index) {
          const index = bodyA.index as number;

          if (index === FRUITS.length - 1) return;

          World.remove(world, [bodyA, bodyB]);

          const newFruit = FRUITS[index + 1];
          setScore(currentScore => currentScore + 10);

          const newBody = Bodies.circle(
            pair.collision.supports[0].x,
            pair.collision.supports[0].y,
            newFruit.radius,
            {
              render: {
                sprite: {
                  texture: `/${newFruit.name}.png`,
                  xScale: 1,
                  yScale: 1,
                },
              },
              restitution: 0.2,
            }
          ) as ExtendedBody;

          newBody.index = index + 1; // 'index' 속성을 따로 추가


          World.add(world, newBody);
        }


        if (!disableAction &&
          (pair.collision.bodyA.label === 'topLine' || pair.collision.bodyB.label === 'topLine')) {
          alert('Game Over');
        }
      });
    });

    addFruit();

    return () => {
      window.removeEventListener('resize', updateGameSize);
      Render.stop(render);
      World.clear(engine.world, true);
      Engine.clear(engine);
      render.canvas.remove();
    };

  }, []);


  return (
    <div className='h-screen bg-custom-font-brown-2'>
      <div id="scoreBoard" className="text-right text-white p-4">Score: {score}</div>
      <div className="relative flex justify-center items-center">
        <div ref={gameRef} className=" bg-custom-brown-3" style={{ transform: 'scale(1.2)', transformOrigin: 'top left' }} />
      </div>
      <div className='absolute rounded-3xl bg-custom-blue-2 w-full bottom-30'>
      </div>
    </div>
  )
}

export default FruitGame