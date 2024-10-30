;; P2P Energy Trading Contract
(define-contract p2p-energy-trading
  (
    (seller principal)
    (buyer principal)
    (energy-amount uint)
    (price-per-unit uint)
    (timestamp int)
    (is-completed bool)
  )

  (
    (get-seller () seller)
    (get-buyer () buyer)
    (get-energy-amount () energy-amount)
    (get-price-per-unit () price-per-unit)
    (get-timestamp () timestamp)
    (get-is-completed () is-completed)
    (initiate-trade (seller-addr buyer-addr energy-amt price-per-unit-amt)
      (begin
        (map-set seller seller-addr)
        (map-set buyer buyer-addr)
        (map-set energy-amount energy-amt)
        (map-set price-per-unit price-per-unit-amt)
        (map-set timestamp (get-current-block-height))
        (map-set is-completed false)
        true
      )
    )
    (complete-trade ()
      (begin
        (map-set is-completed true)
        true
      )
    )
  )
)
